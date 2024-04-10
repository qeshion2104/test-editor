import { LiteGraph } from "litegraph.js";

import { EventListenNode } from "./nodes/event/eventListenNode";
import { EventDispatchNode } from './nodes/event/eventDispatchNode';
import { EventListenOnceNode } from './nodes/event/eventListenOnceNode';
import { MinusNode } from "./nodes/minusNode";
import { AddNode } from "./nodes/addNode";
import { WaitAll } from "./nodes/fix/waitAll";
import { Watch } from "./nodes/fix/watch";
import { LogicBranch } from "./nodes/fix/logicBranch";
import { EventDispatchReduxNode } from "./nodes/event/eventDispatchReduxNode";


// custom
// custom-event
LiteGraph.registerNodeType("custom/event/dispatch", EventDispatchNode);
LiteGraph.registerNodeType("custom/event/listen", EventListenNode);
LiteGraph.registerNodeType("custom/event/listenOnce", EventListenOnceNode);
LiteGraph.registerNodeType("custom/event/dispatchRedux", EventDispatchReduxNode);
// custom-object
// LiteGraph.registerNodeType("custom/object/props", ObjectProps);

// fix original
LiteGraph.registerNodeType("logic/IF", LogicBranch);
LiteGraph.registerNodeType("events/waitAll", WaitAll);    
LiteGraph.registerNodeType("basic/watch", Watch);

// test
LiteGraph.registerNodeType("basic/sum", AddNode);
LiteGraph.registerNodeType("basic/minus", MinusNode);

export {}