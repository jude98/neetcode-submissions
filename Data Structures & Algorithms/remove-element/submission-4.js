class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let currentInsertPosition = 0;
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] !== val) {
                nums[currentInsertPosition] = nums[i];
                currentInsertPosition += 1;
            }
        }

        nums.fill('_', currentInsertPosition, nums.length)

        return currentInsertPosition

    }
}