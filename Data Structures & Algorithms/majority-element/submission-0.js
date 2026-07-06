class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let currentMajorityElement = null;
        let count = 0;

        for(const eachNum of nums) {
            if(!count) {
                currentMajorityElement = eachNum;
                count += 1;
                continue;
            }

            count += eachNum === currentMajorityElement ? 1 : -1
        }

        return currentMajorityElement
    }
}