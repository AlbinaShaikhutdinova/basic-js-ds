const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports = class Stack {
  _stack=[];
  push( element) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this._stack.length==0)
      this._stack[0]= element;
    else{
      let prev = this._stack[0];
      let i=1;
      while(this._stack[i]){
        let cur = this._stack[i];
        this._stack[i]=prev;
        prev = cur;
        i++;
      }
      this._stack[i]=prev;
      this._stack[0]= element;
    }

  }

  pop() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const first = this._stack[0];
    let i=0;
    while(this._stack[i+1])
    {
      this._stack[i]=this._stack[i+1];
      i++;
    }
    this._stack.splice(i,1);
    return first;
  }

  peek() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this._stack[0];
  }
}
