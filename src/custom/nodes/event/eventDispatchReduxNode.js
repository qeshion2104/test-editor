import { LiteGraph } from "litegraph.js";
import { ENGINE_PREFIX, EVENTS } from "../../../const";

//your node constructor class
export class EventDispatchReduxNode {
  static title = "Dispatch Redux Event";
  static desc = "dispatch event to redux store";
  constructor() {
    this.mode = LiteGraph.ON_TRIGGER
    // type, name, value, options
    this.currentEventName = null;
    this.addProperty("type", "action");
    this.widget = this.addWidget("text", "action", "action", "type");
    // this.widgets_up = true;
    
    this.addProperty("data", "");
    this.addInput("data", "object");
    this.setSize([190, 50])
  }

  onExecute() {
    const type = this.properties.type;
    const data = this.getInputData(0) || this.properties.data || {};
    try {
      const json = typeof data === 'object' ? data : JSON.parse(data);
      this.boxcolor = "#AEA";
      window.dispatchEvent(new CustomEvent(`${ENGINE_PREFIX}${EVENTS.REDUX_EVENT}`, { 
        detail: {
          event: type,
          data: json,
        }
      }));
    } catch (err) {
      console.error(err)
      this.boxcolor = "red";
    }
    
  }

  onPropertyChanged(name, value) {
    if (name === 'action') {
      this.widget.value = value;
      if (value == null || value == "") {
        return;
      }
      try {
          this._data = JSON.parse(value);
          this.boxcolor = "#AEA";
      } catch (err) {
          this.boxcolor = "red";
      }
    }
  }
}