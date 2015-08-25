/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n})
  for (var row = 0, col = 0; row < n; row++, col++) {
    solution.togglePiece(row, col);
  }
  return solution.rows();
};

/*
  window.findNRooksSolutions = function(n, board, r) {
  var solution = board || new Board({'n': n});
  var rows = solution.rows();
  r = r || 0;
  if (r > n - 1 ) { 
    console.log(solution.rows())
    return solution.rows();
  } else {
    var row = rows[r];
    for (var col = 0; col < row.length; col++) {
       solution.togglePiece(row, col);
       if (!solution.hasAnyRooksConflicts()) {
        r += 1;
        return findNRooksSolution(n, solution, r);
       } else {
        solution.togglePiece(row, col);
       }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
};

*/

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
