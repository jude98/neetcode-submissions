class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || height.length === 0) return 0;

        let left = 0;
        let right = height.length - 1;
        
        let leftMax = 0;
        let rightMax = 0;
        let totalWater = 0;

        while (left < right) {
            // The side with the lower current wall bottlenecks the water height
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left]; // Update max wall on the left
                } else {
                    totalWater += leftMax - height[left]; // Trap water column by column
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right]; // Update max wall on the right
                } else {
                    totalWater += rightMax - height[right]; // Trap water column by column
                }
                right--;
            }
        }

        return totalWater;
    }
}

console.log(new Solution().trap([0,2,0,3,1,0,1,3,2,1])); // Outputs: 5