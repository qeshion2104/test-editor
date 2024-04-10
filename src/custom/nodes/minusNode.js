import { LiteGraph } from "litegraph.js";

//your node constructor class
export class MinusNode {
    static title = "Minus";
    constructor() {
        this.addInput("A", "number");
        this.addInput("B", "number");
        //add some output slots
        this.addOutput("A-B", "number");
        //add some properties
        this.properties = { precision: 1 };
    }
    onExecute = function () {
        //retrieve data from inputs
        let A = this.getInputData(0);
        if (A === undefined) A = 0;
        let B = this.getInputData(1);
        if (B === undefined) B = 0;
        //assing data to outputs
        this.setOutputData(0, A - B);
    };
}
