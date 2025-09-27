// https://leetcode.com/problems/largest-triangle-area/description/?envType=daily-question&envId=2025-09-27

/*
*
* Given an array of points on the X-Y plane points where points[i] = [xi, yi],
* return the area of the largest triangle that can be formed by any three different points.
* Answers within 10-5 of the actual answer will be accepted.
*
* Example 1:
* Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
* Output: 2.00000
* Explanation: The five points are shown in the above figure. The red triangle is the largest.
*
* Constraints:
* 3 <= points.length <= 50
* -50 <= xi, yi <= 50
* All the given points are unique.
* */

/**
 * @param {number[][]} points
 * @return {number}
 */
// TC: O(n^3)
// SC: O(1)
var largestTriangleArea = function(points) {
    // brute force
    /**
     * for 3 points, p_1, p_2, p_3 on a plane, define a = p_1p_2, b = p_1p_3
     * according to the definition of the vector cross product, ∥a×b∥ represents the area of the parallelogram spanned by 𝑎 and b.
     * Dividing it by 2 gives the area of triangle p_1p_2p_3
     */
    let n = points.length;
    let ans = 0;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                let p1 = points[i];
                let p2 = points[j];
                let p3 = points[k];
                let x1 = p2[0] - p1[0];
                let x2 = p3[0] - p1[0];
                let y1 = p2[1] - p1[1];
                let y2 = p3[1] - p1[1];
                ans = Math.max(ans, Math.abs(x1 * y2 - y1 * x2));
            }
        }
    }
    return ans / 2;
};


console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]));  // 2
console.log(largestTriangleArea([[1,0],[0,0],[0,1]]));  // 0.5
