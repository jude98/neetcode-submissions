class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        // A Set handles O(1) lookups and deletions
        const windowSet = new Set();

        for (let i = 0; i < nums.length; i++) {
            // 1. If the current number is already inside our window set,
            // it means we found a duplicate within distance 'k'.
            if (windowSet.has(nums[i])) {
                return true;
            }

            // 2. Add the current element to our sliding window
            windowSet.add(nums[i]);

            // 3. Keep the window size strictly constrained to 'k'.
            // If the set grows larger than k, remove the oldest element.
            if (windowSet.size > k) {
                windowSet.delete(nums[i - k]);
            }
        }

        return false;
    }
}
