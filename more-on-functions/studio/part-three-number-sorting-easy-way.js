//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
//todo: Explained - TIMESTAMP: https://youtu.be/qjRsx-n1KM4?t=1476
// this is an example of a Compare Function
console.log(nums1.sort(function(a, b) {return a - b}));

function compareFunction(a, b) {
    // 1: a - b returns a negative number; a gets sorted first
    // 2: a - b returns 0; a and b remain in their spots in the array
    // 3: a - b returns a positive number; b gets sorted in the array
    return a - b;
    //! return b - a;   (this can be seen in the next problem)
    // above ^ the larger of the number is ordered first; this creates a descending order
}
//Sort each array in descending order.
console.log(nums1.sort(function(a, b) {return b - a}));