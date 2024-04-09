import * as LG from "litegraph.js";
import { AddNode } from './custom/nodes/addNode' 



if (window) {
  window.LiteGraph = LG.LiteGraph;
  window.LGraph = LG.LGraph;
  window.LLink = LG.LLink;
  window.LGraphNode = LG.LGraphNode;
  window.LGraphGroup = LG.LGraphGroup;
  window.DragAndScale = LG.DragAndScale;
  window.LGraphCanvas = LG.LGraphCanvas;
  window.ContextMenu = LG.ContextMenu;
}
export default LG
// (function(global){
//   console.log('.lllll', global, LG)
//   global.LiteGraph = LG.LiteGraph;
//   global.LGraph = LG.LGraph;
//   global.LLink = LG.LLink;
//   global.LGraphNode = LG.LGraphNode;
//   global.LGraphGroup = LG.LGraphGroup;
//   global.DragAndScale = LG.DragAndScale;
//   global.LGraphCanvas = LG.LGraphCanvas;
//   global.ContextMenu = LG.ContextMenu;
// })(this)



// if (typeof exports != "undefined") {
//   exports.LiteGraph = this.LiteGraph;
//   exports.LGraph = this.LGraph;
//   exports.LLink = this.LLink;
//   exports.LGraphNode = this.LGraphNode;
//   exports.LGraphGroup = this.LGraphGroup;
//   exports.DragAndScale = this.DragAndScale;
//   exports.LGraphCanvas = this.LGraphCanvas;
//   exports.ContextMenu = this.ContextMenu;
// }


