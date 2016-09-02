// Given a square matrix of size N x N, calculate the absolute difference
// between the sums of its diagonals.

// HR solution

function main(matrix) {
    var n = matrix.length;
    var suma = 0,
        sumb = 0;
    for(var i = 0; i < n; i++) {
        var line = matrix[i];
        suma += line[i];
        sumb += line[n-i-1];
    }
    return Math.abs(sumb-suma);
}


var matrixExample = [[11, 2,   4],
                     [4,  5,   6],
                     [10, 8, -12]];

console.log(main(matrixExample));
