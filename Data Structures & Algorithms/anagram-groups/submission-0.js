class Solution {

    #getHash(str) {
        const charOccuranceMap = new Map();
        for(const char of str) {
            charOccuranceMap.set(char, (charOccuranceMap.get(char) || 0) + 1);
        }

        // sort them and return as string
        const sorted = [...charOccuranceMap.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([char, count]) => `${char}${count}`).join('');

        return sorted;
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strHash = new Map();

        // first store the hash map of each str
        for(const eachStr of strs) {
            const hash = this.#getHash(eachStr);
            if(strHash.get(hash)) {
                strHash.get(hash).push(eachStr);
            } else {
                strHash.set(hash, [eachStr]);
            }
        }

        const anagrams = [...strHash.values()];
        return anagrams
    }
}

