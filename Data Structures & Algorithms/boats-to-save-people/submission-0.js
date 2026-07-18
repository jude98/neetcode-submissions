class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        // 1. Sort the people by weight ascending
        people.sort((a, b) => a - b);

        let i = 0;
        let j = people.length - 1;
        let boats = 0;

        // 2. Pair them up from outside in
        while (i <= j) {
            boats++; // A boat is going to be used anyway

            if (i === j) {
                // Only one person left, they get their own boat.
                break;
            }

            // If the heaviest and lightest can share
            if (people[i] + people[j] <= limit) {
                i++; // Lightest person gets on, move pointer inward
            }

            // The heaviest person always gets on this boat
            j--;
        }

        return boats;
    }
}
