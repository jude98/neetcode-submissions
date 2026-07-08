class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (nums.length <= 1) {
            return nums;
        }

        const mid = Math.floor(nums.length / 2);
        const left = this.sortArray(nums.slice(0, mid));
        const right = this.sortArray(nums.slice(mid, nums.length));

        const mergedArr = this.merge(left, right);

        return mergedArr;
    }

    merge(left, right) {
        let leftIdx = 0;
        let rightIdx = 0;
        const mergedArr = [];
        while (leftIdx < left.length && rightIdx < right.length) {
            if (left[leftIdx] <= right[rightIdx]) {
                mergedArr.push(left[leftIdx++]);
            } else {
                mergedArr.push(right[rightIdx++]);
            }
        }

        if (leftIdx < left.length) {
            mergedArr.push(...left.slice(leftIdx, left.length));
        }

        if (rightIdx < right.length) {
            mergedArr.push(...right.slice(rightIdx, right.length));
        }

        return mergedArr;
    }
}
