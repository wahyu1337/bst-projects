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
    }

};