import { LiteGraph } from "litegraph.js";
import { ENGINE_PREFIX } from "../../../const";

//your node constructor class
export class EventListenOnceNode {
  static title = "Event Listen Once";
  static desc = "Trigger event when listen to specific window event once";
  constructor() {
    window['TTTT']  = this
    this.mode = LiteGraph.ON_TRIGGER
    this._isTriggered = false
    // type, name, value, options
    this.currentEventName = null;
    this.addProperty("event", "test");
    this.widget = this.addWidget("text", "event", "test", "event");
    this.widgets_up = true;

    this.size[0] = 100;
    this.addOutput("event", LiteGraph.EVENT);
    this.addOutput("data", "object");
    
    this.setSize([160, 50])
  }

  onEvent = (event) => {
    const { type, detail } = event;
    this.setOutputData(1, detail);
    this.trigger("event", null);
  };

  onExecute() {
    const event = this.properties["event"]
    if (this._isTriggered) {
      return
    }
    this._isTriggered = true
    window.addEventListener(`${ENGINE_PREFIX}${event}`, (e) => {
      this.onEvent(e)
      this._isTriggered = false
    }, { once: true });
  }
  onDrawBackground(ctx){
    if (this.flags.collapsed) {
        return;
    }
    this.boxcolor = this._isTriggered ? "#FFA" : LiteGraph.NODE_TITLE_COLOR;
  }
}
