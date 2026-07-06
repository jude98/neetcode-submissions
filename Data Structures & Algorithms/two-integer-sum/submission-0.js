class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsSet = new Map();
        for(const [idx, eachNum] of nums.entries()) {
            const compliment = target - eachNum;
            if(numsSet.has(compliment)) {
                return [numsSet.get(compliment), idx]
            } 
            numsSet.set(eachNum, idx);
        }

        return []
    }
}