import * as LG from "litegraph.js";
import * as customNodes from './custom/index.js'; 
// import { AddNode, MinusNode, EventListenNode } from './custom/index.js'; 

if (window) {
  window.clamp = LG.clamp;
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
