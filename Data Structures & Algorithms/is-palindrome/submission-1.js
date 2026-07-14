class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let leftPointer = 0;
        let rightPointer = s.length - 1;
        let skipCount = 0;

        const alphanumericPattern = /[a-zA-Z0-9]/;

        while (leftPointer < rightPointer) {
            if (!alphanumericPattern.test(s[leftPointer])) {
                leftPointer++;
            } else if (!alphanumericPattern.test(s[rightPointer])) {
                rightPointer--;
            } else if (s[leftPointer].toLowerCase() !== s[rightPointer].toLowerCase()) {
                // Characters don't match, not a palindrome
                return false;
            } else {
                leftPointer++;
                rightPointer--;
            }
        }
        return true;
    }
}
