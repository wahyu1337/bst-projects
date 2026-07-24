import Node from "./node.js";

// tree class & build tree function
export default class Tree {
    // constructor
    constructor(arr) {
        this.root = this.buildTree(arr, 0, arr.length - 1);
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
};