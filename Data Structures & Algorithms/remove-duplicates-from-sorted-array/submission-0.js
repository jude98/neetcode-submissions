class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if (nums.length === 0) return 0;

        // 'i' tracks the index of the last known unique element
        let i = 0;

        // 'j' scans through the array looking for new unique elements
        for (let j = 1; j < nums.length; j++) {
            // If we find a value that is different from our last unique element...
            if (nums[j] !== nums[i]) {
                i++; // Move the unique pointer forward
                nums[i] = nums[j]; // Copy the new unique value over
            }
        }

        // The number of unique elements is the index 'i' plus 1
        return i + 1;
    }
}
