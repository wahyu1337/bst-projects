# A Node class for inputting the data. (with integrated var root left & right).
# A Tree class accept arrays.
    - constructor(arr)
        - arr
        - sortedArray & Duplicate method.
        - this.root = buildTree(sortedArray, 0, sortedArray.length - 1).

# function buildTree(arr, start, end) example: [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
    - guard case: 
                IF (start > end) return null.
    
    - mid = Math.floor((start + end) / 2)
    - root = new Node (arr[mid])
    - root.left = buildTree(arr, start, mid - 1)
    - root.right = buildTree(arr, mid + 1, end)

    return root