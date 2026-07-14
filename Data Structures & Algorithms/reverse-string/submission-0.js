class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        if(!s.length) return [];

        let idx = 0;
        while(idx < s.length / 2) {
            // swap
            [s[s.length - idx - 1] , s[idx]]=[s[idx], s[s.length - idx - 1]]
            idx++;
        }
    }
}
