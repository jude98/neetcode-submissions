class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let i = 0;
        let j = heights.length - 1;

        while (i < j) {
            // 1. Calculate width (length) and height
            let width = j - i;
            let currentHeight = Math.min(heights[i], heights[j]);

            // 2. Calculate area and update maximum
            let currentWater = width * currentHeight;
            maxWater = Math.max(maxWater, currentWater);

            // 3. Move the pointer pointing to the shorter wall
            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }

        return maxWater;
    }
}
