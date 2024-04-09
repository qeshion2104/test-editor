import { LiteGraph } from "litegraph.js";

//your node constructor class
export function AddNode()
{
  //add some input slots
  this.addInput("A","number");
  this.addInput("B","number");
  //add some output slots
  this.addOutput("A+B","number");
  //add some properties
  this.properties = { precision: 1 };
}

//name to show on the canvas
AddNode.title = "Sum";

//function to call when the node is executed
AddNode.prototype.onExecute = function()
{
  //retrieve data from inputs
  var A = this.getInputData(0);
  if( A === undefined )
    A = 0;
  var B = this.getInputData(1);
  if( B === undefined )
    B = 0;
  //assing data to outputs
  this.setOutputData( 0, A + B );
}

//register in the system
LiteGraph.registerNodeType("basic/sum", AddNode);