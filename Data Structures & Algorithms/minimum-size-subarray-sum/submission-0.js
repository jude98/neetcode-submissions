class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let left = 0;
        let right = 0;
        let currentSum = 0;
        let minLength = Infinity;

        // Loop continues as long as we haven't exhausted our search space
        while (right < nums.length || currentSum >= target) {
            if (currentSum < target) {
                // Need a larger sum: EXPAND window
                currentSum += nums[right];
                right++;
            } else {
                // Found a valid sum: RECORD & SHRINK window
                minLength = Math.min(minLength, right - left);
                currentSum -= nums[left];
                left++;
            }
        }

        return minLength === Infinity ? 0 : minLength;
    }
}
