import Node from "./node.js";

// tree class & build tree function
export default class Tree {
    // private
    #array
    // constructor
    constructor(arr) {
        this.#array = arr;
        this.sortedArr = this.sort(arr)
        this.root = this.buildTree(this.sortedArr, 0, this.sortedArr.length - 1);
    };

    // building a tree method
    buildTree(arr, start = 0, end = arr.length - 1) {
        // base case/conditional
        if (start > end) return null;

        // find the mid index
        let mid = Math.floor((start + end) / 2);
        let root = new Node(arr[mid]);

        // divide from middle (left & right)
        root.left = this.buildTree(arr, start, mid - 1);
        root.right = this.buildTree(arr, mid + 1, end);

        return root;
    };

    // sort() & duplicate using set() method for sorted an array and
    // remove duplicate
    sort() {
        // sorted the array using built in method
        return [...new Set(this.#array)].sort((a, b) => a - b);
    }

    // includes(value) method to check matching value
    includes(value) {
        // get the root into var
        let curr = this.root;

        while (curr !== null) {
            // if node is match
            if (curr.data === value) {
                return true;
            } //search in right subtree
            else if (curr.data < value) {
                curr = curr.right;
            } else {
                curr = curr.left; // search in left subtree
            }
        } return false; // if values not found
    };

    // insert() method to insert a new value in tree
    // private method insertRec()
    _insertRec(node, value) {
        // base case
        if (node === null) return new Node(value);

        // revursively check (left and then right)
        if (value < node.data) {
            node.left = this._insertRec(node.left, value);
        } else {
            node.right = this._insertRec(node.right, value);
        }

        // if current node === value, just return.
        return node;
    };

    // public insert()
    insert(value) {
        this.root = this._insertRec(this.root, value);
    };

    // deleteItem(value) to remove from tree
    // and make seperate successor if the node has two childs
    // get inorder successor (smallest in the right subtree)
    _getSuccessor(curr) {
        curr = curr.right;
        while (curr !== null && curr.left !== null) {
            curr = curr.left;
        }
        return curr;
    };

    // delete node from bst
    _deletedItemPvt(root, value) {
        // base conditional
        if (root === null) {
            return root;
        }

        if (root.data > value) {
            root.left = this._deletedItemPvt(root.left, value);
        } else if (root.data < value) {
            root.right = this._deletedItemPvt(root.right, value);
        } else {
            // node with 0 or 1 child
            if (root.left === null) {
                root = root.right;
            } else if (root.right === null) {
                root = root.left
            } else {
                // both have two children
                const successor = this._getSuccessor(root)
                root.data = successor.data
                root.right = this._deletedItemPvt(root.right, successor.data);
            }
        }
        return root;
    };

    deleteItem(value) {
        this.root = this._deletedItemPvt(this.root, value);
    };
};