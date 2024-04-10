import { LiteGraph } from "litegraph.js";

// support json output
export class Watch {
  static title = "Watch";
  static desc = "Show value of input";

  constructor() {
    this.size = [60, 30];
    this.addInput("value", 0, { label: "" });
    this.value = 0;
  }

  onExecute() {
    if (this.inputs[0]) {
      this.value = this.getInputData(0);
    }
  }

  getTitle() {
    if (this.flags.collapsed) {
      return this.inputs[0].label;
    }
    return this.title;
  }

  static toString(o) {
    if (o == null) {
      return "null";
    } else if (o.constructor === Number) {
      return o.toFixed(3);
    } else if (o.constructor === Array) {
      var str = "[";
      for (var i = 0; i < o.length; ++i) {
        str += Watch.toString(o[i]) + (i + 1 != o.length ? "," : "");
      }
      str += "]";
      return str;
    } else if (o.constructor === Object) {
      return JSON.stringify(o, null, 2)
    } else {
      return String(o);
    }
  }

  onDrawBackground(ctx) {
    //show the current value
    this.inputs[0].label = Watch.toString(this.value);
  }
}
