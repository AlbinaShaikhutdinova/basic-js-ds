//const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  _root=null;
root() {
//throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
   
  return this._root;
}

add( data ) {
let newNode = new Node(data);
//throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
if(this._root==null)
  this._root= newNode;
else{
  this.insert(this._root,newNode);
}

}
insert(node,newNode)
{
if(newNode.data>node.data)
{
  if(node.right==null)
    node.right=newNode
  else this.insert(node.right,newNode);
}
else{
  if(node.left==null)
    node.left=newNode;
  else this.insert(node.left,newNode);
}

}

has( data ) {
//throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
if(this._root===null)
  return false;
return this.hasData(this._root,data);

}
hasData(node,data){
if(data===node.data)
  return true;
else if(data>node.data)
{
    if(node.right===null)
      return false;
    return this.hasData(node.right,data);
}
else{
  if(node.left===null)
      return false;
  return this.hasData(node.left,data);
}
}


find( data ) {
//throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
if(this.has(data))
  return this.findData(this._root,data);
return null;

}
findData(node,data){
if(node.data==data)
  return node;
if(data>node.data)
{
    return this.findData(node.right,data);
}
else{
  return this.findData(node.left,data);
}

}

remove(data) {
//throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
  this._root = this.removeNode(this._root, data);

}

removeNode(node, key)
{
     
// if the root is null then tree is
// empty
if(node === null)
    return null;

// if data to be delete is less than
// roots data then move to left subtree
else if(key < node.data)
{
    node.left = this.removeNode(node.left, key);
    return node;
}

// if data to be delete is greater than
// roots data then move to right subtree
else if(key > node.data)
{
    node.right = this.removeNode(node.right, key);
    return node;
}

// if data is similar to the root's data
// then delete this node
else
{
     // deleting node with no children
    if(node.left === null && node.right === null)
    {
        node = null;
        return node;
    }

    // deleting node with one children
    if(node.left === null)
    {
        node = node.right;
        return node;
    }
     
    else if(node.right === null)
    {
        node = node.left;
        return node;
    }

    // Deleting node with two children
    // minimum node of the right subtree
    // is stored in aux
    var aux = this.findMinRight(node.right);
    node.data = aux.data;

    node.right = this.removeNode(node.right, aux.data);
    return node;
}
}
min() {
//throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
return this.findMinNode(this._root);
}
findMinNode(node){
if(node.left===null)
  return node.data;
return this.findMinNode(node.left);
}

findMinRight(node){
  if(node.left===null)
    return node;
  return this.findMinRight(node.left);
  }

max() {
//throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
return this.findMaxNode(this._root);
}
findMaxNode(node){
if(node.right==null)
 return node.data;
return this.findMaxNode(node.right);
}

}