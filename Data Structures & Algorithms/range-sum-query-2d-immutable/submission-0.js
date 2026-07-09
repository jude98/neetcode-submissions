class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.rangeSumMatrix = matrix.map((row) => row.map(() => 0));
        for (let row = 0; row < matrix.length; row++) {
            let maxRowSum = 0;
            for (let col = 0; col < matrix[row].length; col++) {
                maxRowSum += matrix[row][col];
                // add the above cell
                this.rangeSumMatrix[row][col] +=
                    (row ? this.rangeSumMatrix[row - 1][col] : 0) + maxRowSum;
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        const hasRowAbove = row1 > 0;
        const hasColLeft = col1 > 0;

        let sum = this.rangeSumMatrix[row2][col2];

        if (hasRowAbove) {
            sum -= this.rangeSumMatrix[row1 - 1][col2];
        }
        if (hasColLeft) {
            sum -= this.rangeSumMatrix[row2][col1 - 1];
        }
        if (hasRowAbove && hasColLeft) {
            sum += this.rangeSumMatrix[row1 - 1][col1 - 1]; // add back double-subtracted corner
        }

        return sum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
