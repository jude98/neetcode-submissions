class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (const num of numSet) {
            // only attempt to build a sequence if `num` is a sequence START
            if (!numSet.has(num - 1)) {
                let length = 1;
                let current = num;

                while (numSet.has(current + 1)) {
                    current++;
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}
