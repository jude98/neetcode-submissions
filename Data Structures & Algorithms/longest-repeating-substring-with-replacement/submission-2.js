class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0, right = 0;
        const countMap = new Map();
        let maxCount = 0;
        let maxLength = 0;
        while(right < s.length) {  
            const windowLength = (right - left) + 1;
            countMap.set(s[right], (countMap.get(s[right]) || 0) + 1);
            maxCount = Math.max(maxCount, countMap.get(s[right]));            
            const nonRepeatingOccurance = windowLength - maxCount;
            if(nonRepeatingOccurance > k) {
                // shrink
                countMap.set(s[left], countMap.get(s[left]) - 1);
                left++;
            } else {
                // expand
                maxLength = Math.max(maxLength, windowLength);
            }
            right++
        }

        return maxLength
    }
}
