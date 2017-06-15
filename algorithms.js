function Node(value) {
  this.value = value;
  this.left = null
  this.right = null;
}

Node.prototype.insert = function(value) {

  var newNode = new Node(value);
  var stack = [this]

  while(stack.length) {
    var currentNode = stack.shift();
    if (value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        stack.push(currentNode.left)
      }
    }
    if (value > currentNode.value) {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        stack.push(currentNode.right)
      }
    }
  }
}

var newBST = new Node(25);
newBST.insert(3)
newBST.insert(4)
newBST.insert(56)
newBST.insert(30)
newBST.insert(1)
newBST.insert(20)
newBST.insert(10)
newBST.insert(63)

// console.log(newBST)

/*
         25
    3            56
  1   4        30   63
        20
      10
*/

// 25 3 1 4 20 10 56 30 63
function preOrderDFS(root) {
  var stack = [root];

  while (stack.length) {
    var currentNode = stack.pop();
    console.log(currentNode.value)
    if (currentNode.right) stack.push(currentNode.right)
    if (currentNode.left) stack.push(currentNode.left)
  }
}
// preOrderDFS(newBST);


// 1 10 20 4 3 30 63 56 25
// the reverse of a modified DFS
function postOrderDFS(root) {
  var stack = [root];
  var reverseStack = [];
  while (stack.length) {
    var currentNode = stack.pop();
    reverseStack.push(currentNode)

    if (currentNode.left) stack.push(currentNode.left)
    if (currentNode.right) stack.push(currentNode.right);
  }
  for (var i=reverseStack.length-1; i>=0; i--) {
    console.log(reverseStack[i].value)
  }
}
// postOrderDFS(newBST);


// 1 3 4 10 20 25 30 56 63
function inOrderDFS(root) {
  var stack = [root];
  while (stack.length) {
    var currentNode = stack.pop();
    if (currentNode.left && !currentNode.left.visited) {
      stack.push(currentNode)
      stack.push(currentNode.left)
    } else {
      currentNode.visited = true;
      console.log(currentNode.value)
      if (currentNode.right) {
        stack.push(currentNode.right)
      }
    }
  }
}
// inOrderDFS(newBST);
