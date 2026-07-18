class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0,
            right = 0;
        let maxLength = 0;
        const lookUpMap = new Map();
        while (right < s.length) {
            if (lookUpMap.has(s[right])) {
                left = Math.max(lookUpMap.get(s[right]) + 1, left);
            }
            maxLength = Math.max(maxLength, right - left + 1);
            lookUpMap.set(s[right], right);
            right++;
        }

        return maxLength;
    }
}
