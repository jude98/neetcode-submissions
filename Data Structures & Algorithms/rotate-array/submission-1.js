class Solution {
    /**
     * Reverses a portion of the array in-place from index 'from' to index 'to'.
     * @param {number[]} nums
     * @param {number} from
     * @param {number} to
     * @return {number[]}
     */
    reverse(nums, from, to) {
        let left = from;
        let right = to;
        
        // Move pointers inward and swap elements
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }

        return nums;
    }

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const n = nums.length;
        
        // Clean up rotation size if k is larger than array length
        k = k % n; 
        if (k === 0) return;

        // Step 1: Reverse the entire array
        this.reverse(nums, 0, n - 1);

        // Step 2: Reverse the first k elements (index 0 to k - 1)
        this.reverse(nums, 0, k - 1);

        // Step 3: Reverse the remaining elements (index k to the end)
        this.reverse(nums, k, n - 1);
    }
}