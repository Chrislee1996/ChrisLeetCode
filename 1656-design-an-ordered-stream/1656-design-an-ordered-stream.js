/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.pointerOne = 1
    this.hashmap = {}
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    let stack = []
    this.hashmap[idKey] = value
    
    while(this.hashmap[this.pointerOne]) {
        stack.push(this.hashmap[this.pointerOne]) 
        this.pointerOne++
    }
    return stack
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */



