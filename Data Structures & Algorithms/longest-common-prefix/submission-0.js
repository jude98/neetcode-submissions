class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        if(!strs.length) return "";

        let currentLongestPrefix = strs[0];
        
        for(const eachStr of strs) {
            while(!eachStr.startsWith(currentLongestPrefix)) {
                currentLongestPrefix = currentLongestPrefix.slice(0, currentLongestPrefix.length - 1);
            }

            if(!currentLongestPrefix) return "";
        }

        return currentLongestPrefix;
        
    }

}