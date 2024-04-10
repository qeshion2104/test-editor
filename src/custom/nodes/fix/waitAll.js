// FIX WAIT ALL NODE in original code

import { LiteGraph } from "litegraph.js";

// fix first time trigger when one condition pass
//Sequence of events
export function WaitAll() {
  var that = this;
  this.addInput("", LiteGraph.ACTION);
  this.addInput("", LiteGraph.ACTION);
  this.addOutput("", LiteGraph.EVENT);
  this.addWidget("button","+",null,function(){
      that.addInput("", LiteGraph.ACTION);
      that.size[0] = 90;
  });
  this.addWidget("button","-",null,function(){
    that.removeInput(that.inputs.length - 1);
    that.size[0] = 90;
  });
  this.size = [90, 70];
  this.ready = [];
}

WaitAll.title = "WaitAll";
WaitAll.desc = "Wait until all input events arrive then triggers output";

WaitAll.prototype.getTitle = function() {
  return "";
};

WaitAll.prototype.onDrawBackground = function(ctx)
{
  if (this.flags.collapsed) {
      return;
  }
  for(var i = 0; i < this.inputs.length; ++i)
  {
      var y = i * LiteGraph.NODE_SLOT_HEIGHT + 10;
      ctx.fillStyle = this.ready[i] ? "#AFB" : "#000";
      ctx.fillRect(20, y, 10, 10);
  }
}

WaitAll.prototype.onAction = function(action, param, options, slot_index) {
  if(slot_index == null)
      return;


  
  //check all
  // WRONG HERE
  // this.ready.length = this.outputs.length;
  this.ready.length = this.inputs.length;
  this.ready[slot_index] = true;
  for(var i = 0; i < this.ready.length;++i)
      if(!this.ready[i])
          return;
  //pass
  this.reset();
  this.triggerSlot(0);
};

WaitAll.prototype.reset = function()
{
  this.ready.length = 0;
}
