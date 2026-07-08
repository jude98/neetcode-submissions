class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let countOf1s = 0;
        let countOf0s = 0;
        
        for(const eachNum of nums) {
            if(eachNum === 1) countOf1s += 1;
            else if (eachNum === 0) countOf0s += 1;
        }


        countOf0s
        countOf1s
        nums.fill(0, 0, countOf0s);
        nums.fill(1, countOf0s, countOf0s + countOf1s);
        nums.fill(2, countOf0s + countOf1s, nums.length);
    }
}