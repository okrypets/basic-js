const chainMaker = {
  chain: "",
  getLength() {
    //this.chain.length > 2 ? [...this.chain.split("~~")] : [...this.chain];
    return !this.chain.length ? 0 : this.chain.split("~~").length;
  },
  addLink(value) {
    typeof value === "undefined" ? value = "( )" : value;
    if (Array.isArray(this.chain)) this.chain.push("( "+value+" )");
    if (typeof this.chain === "string") {
      this.getLength() < 2 ? this.chain = [...this.chain.split(""), "( "+value+" )"] : this.chain = [...this.chain.split("~~"),"( "+value+" )"];
    }
    return this;
  },
  reverseChain() {
    Array.isArray(this.chain) ? this.chain.reverse() : this;
    return this;
  },
  removeLink(position) {
    if (!position || typeof position !== "number" || !this.chain[position-1] || parseInt(position) != position) {
      this.chain = "";
      throw 'Bad position';
    }
    
    this.chain.splice(position - 1, 1);
    return this;
  },
  finishChain() {
    let result = Array.isArray(this.chain) ? this.chain.join("~~") : this.chain;
    this.chain = ""
    return result;
  }
  
}

module.exports = chainMaker;
