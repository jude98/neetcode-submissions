class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const sumLookUpMap = new Map();
        sumLookUpMap.set(0, [-1]);
        let sum = 0;
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];

            if (sumLookUpMap.has(sum - k)) {
                const startIndices = sumLookUpMap.get(sum - k);
                for (const startIndex of startIndices) {
                    result.push(nums.slice(startIndex + 1, i + 1));
                }
            }

            if (!sumLookUpMap.has(sum)) {
                sumLookUpMap.set(sum, []);
            }
            sumLookUpMap.get(sum).push(i);
        }

        return result.length;
    }
}
