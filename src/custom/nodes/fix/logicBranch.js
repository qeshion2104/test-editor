import { LiteGraph } from "litegraph.js";


// original EventBranch replace broken LogicBranch in litegraph.js, which won't trigger correct output
export function LogicBranch() {
  this.addInput("in", LiteGraph.ACTION);
  this.addInput("cond", "boolean");
  this.addOutput("true", LiteGraph.EVENT);
  this.addOutput("false", LiteGraph.EVENT);
  this.size = [120, 60];
  this._value = false;
}

LogicBranch.title = "Branch";
LogicBranch.desc = "If condition is true, outputs triggers true, otherwise false";

LogicBranch.prototype.onExecute = function() {
this._value = this.getInputData(1);
}

LogicBranch.prototype.onAction = function(action, param, options) {
  this._value = this.getInputData(1);
this.triggerSlot(this._value ? 0 : 1, param, null, options);
}