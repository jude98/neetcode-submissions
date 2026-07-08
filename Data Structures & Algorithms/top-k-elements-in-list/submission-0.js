class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = new Map();

        // Step 1: count frequency of each number
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        // Step 2: bucket sort — index = frequency, value = array of numbers with that frequency
        const buckets = new Array(nums.length + 1).fill(null).map(() => []);

        for (const [num, count] of countMap) {
            buckets[count].push(num);
        }

        // Step 3: walk buckets from highest frequency to lowest, collecting numbers until we have k
        const result = [];
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) break;
            }
        }

        return result;
    }
}
