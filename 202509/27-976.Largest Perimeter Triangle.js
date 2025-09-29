// https://leetcode.com/problems/largest-perimeter-triangle/description/?envType=daily-question&envId=2025-09-28
/**
 *
 * Given an integer array nums,
 * return the largest perimeter of a triangle with a non-zero area,
 * formed from three of these lengths.
 * If it is impossible to form any triangle of a non-zero area, return 0.
 *
 *
 * Example 1:
 * Input: nums = [2,1,2]
 * Output: 5
 * Explanation: You can form a triangle with three side lengths: 1, 2, and 2.
 *
 *
 * Example 2:
 * Input: nums = [1,2,1,10]
 * Output: 0
 * Explanation:
 * You cannot use the side lengths 1, 1, and 2 to form a triangle.
 * You cannot use the side lengths 1, 1, and 10 to form a triangle.
 * You cannot use the side lengths 1, 2, and 10 to form a triangle.
 * As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.
 *
 *
 * Constraints:
 * 3 <= nums.length <= 10^4
 * 1 <= nums[i] <= 10^6
 *
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
// TLE
// TC: O(n^3)
// SC: O(1)
var largestPerimeter_bruteForce = function(nums) {
    let n = nums.length;
    let ans = 0;
    for (let i = 0; i < n - 2; i++) {
        let a = nums[i];
        for (let j = i + 1; j < n - 1; j++) {
            let b = nums[j];
            for (let k = j + 1; k < n; k++) {
                let max = Math.max(a, b, nums[k]);
                let perimeter = a + b + nums[k];
                if (perimeter - max > max) {
                    ans = Math.max(perimeter, ans);
                }
            }
        }
    }
    return ans;
};

// TC: O(nlogn)
// SC: O(1)
var largestPerimeter = function(nums) {
    let n = nums.length;
    let ans = 0;
    for (let i = 0; i < n - 2; i++) {
        let a = nums[i];
        for (let j = i + 1; j < n - 1; j++) {
            let b = nums[j];
            for (let k = j + 1; k < n; k++) {
                let max = Math.max(a, b, nums[k]);
                let perimeter = a + b + nums[k];
                if (perimeter - max > max) {
                    ans = Math.max(perimeter, ans);
                }
            }
        }
    }
    return ans;
};
