var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if (this.stack1.length === 0) {
        this.stack1.push(x)
        console.log("stack1", this.stack1)
    } else {
        let n = this.stack1.length;
        for (let i = 0; i < n; i++) {
            this.stack2.push(this.stack1.pop());
        }
        console.log("first loop","stack1", this.stack1, "stack2", this.stack2)

        this.stack1.push(x);
        console.log("bottom of queue","stack1", this.stack1, "stack2", this.stack2)
        for (let i = 0; i < n; i++) {
            this.stack1.push(this.stack2.pop())
        }
        console.log("previously queued","stack1", this.stack1, "stack2", this.stack2)

    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack1[this.stack1.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */