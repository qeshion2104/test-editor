import { LiteGraph } from "litegraph.js";
import { ENGINE_PREFIX } from "../../../const";

//your node constructor class
export class EventListenNode {
  static title = "Event Listen";
  static desc = "Trigger event when listen to specific window event";
  constructor() {
    // type, name, value, options
    this.currentEventName = null;
    this.addProperty("event", "test");
    this.widget = this.addWidget("text", "event", "test", "event");
    this.widgets_up = true;

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
    if (this.currentEventName !== event) {
      if (this.currentEventName) {
        window.removeEventListener(`${ENGINE_PREFIX}${this.currentEventName}`, this.onEvent);
      }
      if (event) {
        window.addEventListener(`${ENGINE_PREFIX}${event}`, this.onEvent);
      }
      this.currentEventName = event;
    }
  }
}

//register in the system
LiteGraph.registerNodeType("custom/eventListen", EventListenNode);
