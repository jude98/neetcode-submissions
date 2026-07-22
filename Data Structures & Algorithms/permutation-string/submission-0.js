class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let needed = s1.length;

        const s1Map = new Map();
        for (let eachS1 of s1) {
            s1Map.set(eachS1, (s1Map.get(eachS1) || 0) + 1);
        }

        let left = 0,
            right = 0;
        while (right < s2.length) {
            const rightChar = s2[right];

            // 1. ADD right character to window
            if (s1Map.has(rightChar)) {
                if (s1Map.get(rightChar) > 0) {
                    needed--;
                }
                s1Map.set(rightChar, s1Map.get(rightChar) - 1);
            }

            // 2. SHRINK window if length > s1.length
            if (right - left + 1 > s1.length) {
                const leftChar = s2[left];
                if (s1Map.has(leftChar)) {
                    // Check count BEFORE incrementing back
                    if (s1Map.get(leftChar) >= 0) {
                        needed++; // We lost a useful character!
                    }
                    s1Map.set(leftChar, s1Map.get(leftChar) + 1);
                }
                left++;
            }

            // 3. CHECK WIN CONDITION
            if (needed === 0) return true;

            right++;
        }

        return false;
    }
}
