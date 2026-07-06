class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const lookupTable = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (lookupTable.has(nums[i])) {
                return true;
            }
            lookupTable.add(nums[i]);
        }

        return false;
    }
}
