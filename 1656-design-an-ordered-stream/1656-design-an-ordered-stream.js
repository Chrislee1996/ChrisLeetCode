/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.pointer = 1
    this.map = {}
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    let stack = []
    this.map[idKey] = value
    while (this.map[this.pointer]) {
        stack.push(this.map[this.pointer])
        this.pointer++
    }
    return stack
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */