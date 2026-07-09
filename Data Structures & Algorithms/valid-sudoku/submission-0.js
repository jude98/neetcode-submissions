class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const val = board[row][col];
                if (val === ".") continue;

                const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                if (rows[row].has(val) || cols[col].has(val) || boxes[boxIndex].has(val)) {
                    return false; // duplicate found
                }

                rows[row].add(val);
                cols[col].add(val);
                boxes[boxIndex].add(val);
            }
        }

        return true;
    }
}
