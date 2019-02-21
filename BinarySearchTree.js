// 二叉查找树（左边的节点均小于根节点，右边的节点均大于根节点）
class BinarySearchTree {
    root = null;

    insert = key => {
        const newNode = new Node(key);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode = (node, newNode) => {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    min = () => {
        let node = this.root;
        while (node.left !== null) {
            node = node.left;
        }
        return node.key;
    }

    max = () => {
        let node = this.root;
        while (node.right !== null) {
            node = node.right;
        }
        return node.key;
    }

    search = (key) => {
        return this.searchNode(this.root, key);
    }

    searchNode = (node, key) => {
        if (node === null) {
            return false;
        }

        if (node.key > key) {
            return this.searchNode(node.left, key);
        } else if (node.key < key) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    // 删除结点
    remove = (key) => {
        // 1.定义临时保存的变量
        let current = this.root;
        let parent = this.root;
        let isLeftChild = true;
        // 2.开始查找节点
        while (current.key !== key) {
            parent = current;
            if (key < current.key) {
                isLeftChild = true;
                current = current.left;
            } else {
                isLeftChild = false;
                current = current.right;
            }
            // 如果发现current已经指向null, 那么说明没有找到要删除的数据
            if (current === null) return false;
        }
        // 3.删除的结点是叶结点
        if (current.left === null && current.right === null) {
            if (current === this.root) {
                this.root = null;
            } else if (isLeftChild) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        }
        // 4.删除有一个子节点的节点
        else if (current.right === null) {
            if (current === this.root) {
                this.root = current.left;
            } else if (isLeftChild) {
                parent.left = current.left;
            } else {
                parent.right = current.left;
            }
        } else if (current.left === null) {
            if (current === this.root) {
                this.root = current.right;
            } else if (isLeftChild) {
                parent.left = current.right;
            } else {
                parent.right = current.right;
            }
        }
        // 5.删除有两个节点的节点
        else {
            // 1.获取后继节点
            let successor = this.getSuccessor(current);
            // 2.判断是否是根节点
            if (current === this.root) {
                this.root = successor;
            } else if (isLeftChild) {
                parent.left = successor;
            } else {
                parent.right = successor;
            }
            // 3.将删除节点的左子树赋值给successor
            successor.left = current.left;
        }
        return true;
    }

    // 找后继的方法
    getSuccessor = (delNode) => {
        // 1.使用变量保存临时的节点
        let successorParent = delNode;
        let successor = delNode;
        let current = delNode.right; // 要从右子树开始找
        // 2.寻找节点
        while (current !== null) {
            successorParent = successor;
            successor = current;
            current = current.left;
        }
        // 3.如果是删除图中15的情况, 还需要如下代码
        if (successor !== delNode.right) {
            successorParent.left = successorParent.right;
            successor.right = delNode.right;
        }
    }

    // 遍历方法
    // 先序遍历
    preOrderTraversal = (handler) => {
        this.preOrderTranversalNode(this.root, handler);
    }

    preOrderTranversalNode = (node, handler) => {
        if (node !== null) {
            handler(node.key);
            this.preOrderTranversalNode(node.left, handler);
            this.preOrderTranversalNode(node.right, handler);
        }
    }

    // 中序遍历
    inOrderTraversal = (handler) => {
        this.inOrderTraversalNode(this.root, handler);
    }

    inOrderTraversalNode = (node, handler) => {
        if (node !== null) {
            this.inOrderTraversalNode(node.left, handler);
            handler(node.key);
            this.inOrderTraversalNode(node.right, handler);
        }
    }

    // 后续遍历
    postOrderTraversal = (handler) => {
        this.postOrderTraversalNode(this.root, handler);
    }

    postOrderTraversalNode = (node, handler) => {
        if (node !== null) {
            this.postOrderTraversalNode(node.left, handler);
            this.postOrderTraversalNode(node.right, handler);
            handler(node.key);
        }
    }
}

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

const bst = new BinarySearchTree();

bst.insert(4);
bst.insert(1);
bst.insert(5);
bst.insert(6);
bst.insert(3);
bst.insert(2);
console.log(bst);
bst.search(6)
// 测试前序遍历结果
let resultString = "";
bst.preOrderTraversal(function (key) {
    resultString += key + " ";
});
console.log(resultString); // 4 1 3 2 5 6 

// 测试中序遍历结果
resultString = "";
bst.inOrderTraversal(function (key) {
    resultString += key + " ";
});
console.log(resultString); // 1 2 3 4 5 6 

// 测试后续遍历结果
resultString = "";
bst.postOrderTraversal(function (key) {
    resultString += key + " ";
});
console.log(resultString); // 2 3 1 6 5 4 

// 获取最值
console.log(bst.min()); // 1
console.log(bst.max()); // 6

// 查找特定的值
console.log(bst.search(1)); // true
console.log(bst.search(21)); // false
// 查找数据
console.log(bst.remove(10)); // false
console.log(bst.remove(2)); // true