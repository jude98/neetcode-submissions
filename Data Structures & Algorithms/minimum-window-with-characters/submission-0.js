class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";

        // 1. Target frequency map
        const tMap = new Map();
        for (let char of t) {
            tMap.set(char, (tMap.get(char) || 0) + 1);
        }

        const requiredUnique = tMap.size;
        let formed = 0;

        const windowMap = new Map();
        let left = 0;
        let right = 0;

        let minLen = Infinity;
        let minLeft = 0;

        // Single while loop handling BOTH expanding and shrinking
        while (right < s.length || formed === requiredUnique) {
            // --- SHRINK MODE (Window is valid) ---
            if (formed === requiredUnique) {
                // Record current window
                let windowLen = right - left;
                if (windowLen < minLen) {
                    minLen = windowLen;
                    minLeft = left;
                }

                // Remove s[left] from window
                let leftChar = s[left];
                windowMap.set(leftChar, windowMap.get(leftChar) - 1);

                if (tMap.has(leftChar) && windowMap.get(leftChar) < tMap.get(leftChar)) {
                    formed--; // Window is no longer valid
                }

                left++; // Shrink window from left
            }

            // --- EXPAND MODE (Window is invalid) ---
            else {
                // Add s[right] to window
                let char = s[right];
                windowMap.set(char, (windowMap.get(char) || 0) + 1);

                if (tMap.has(char) && windowMap.get(char) === tMap.get(char)) {
                    formed++; // Satisfied target count for this character
                }

                right++; // Expand window to right
            }
        }

        return minLen === Infinity ? "" : s.slice(minLeft, minLeft + minLen);
    }
}
