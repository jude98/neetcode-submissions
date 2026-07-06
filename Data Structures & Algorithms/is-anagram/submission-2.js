class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const charCountLookupTable = new Map();

        if (s.length !== t.length) return false;

        for (const eachChar of s) {
            if (charCountLookupTable.has(eachChar)) {
                const count = charCountLookupTable.get(eachChar);
                charCountLookupTable.set(eachChar, count + 1);
            } else {
                charCountLookupTable.set(eachChar, 1);
            }
        }


        for (const eachChar of t) {
            if (charCountLookupTable.has(eachChar)) {
                const count = charCountLookupTable.get(eachChar);
                charCountLookupTable.set(eachChar, count - 1);
                if (count === 1) {
                    charCountLookupTable.delete(eachChar);
                }
            } else {
                return false;
            }
        }

        return charCountLookupTable.size ? false:  true;
    }
}
