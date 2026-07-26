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
};