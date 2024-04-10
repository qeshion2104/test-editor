// @TODO NOT WORKING
// @TODO LINKS WILL DISAPPEAR WHEN REFRESH ....
export class ObjectProps {
  constructor() {
    // link will diappear if you dynamic create!!!
    this.addInput("obj", "object");
    this._value = []
    this.addProperty("keys", "");
    this.size = [140, 90];
  }

  static title = "Object props";
  static desc = "Outputs the property of an object";

  getTitle() {
    return this.title;
  }

  onPropertyChanged(name, value) {
    if (name === "keys") {
      try {
        if (value[0] != "[") this._value = JSON.parse("[" + value + "]");
        else this._value = JSON.parse(value);
        this.boxcolor = "#AEA";
        if (this.outputs) {
          for (let i = this.outputs.length - 1; i >= 0; i--) {
            this.removeOutput(i);
          }
        }
        for (let i = 0; i < this._value.length; i++) {
          this.addOutput(this._value[i]);
        }
        
      } catch (err) {
        this.boxcolor = "red";
      }
    }
  }

  onExecute() {
    var data = this.getInputData(0);
    if (data != null) {
      this.outputs.forEach((_, index) => {
        this.setOutputData(index, data[this._value[index]]);
      });
    }
  }
}
