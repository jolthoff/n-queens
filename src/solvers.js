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

window.clone = function(obj) {
  var clone = {};
  for (var key in obj) {
    clone[key] = obj[key];
  }
  return clone;
}
// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var root = new Board({'n': n});

  findNSolutions = function(node, row) {
    var child = new Board(node.rows());
    if (row > n - 1) {
      solutionCount++;
      return;
    } else { 
      for (var col = 0; col < n; col++) {
        child.togglePiece(row, col);
        if (!child.hasAnyRooksConflicts()) {
          findNSolutions(child, row + 1);
        }
        child.togglePiece(row, col);
      }
    }
  }
  if (n === 1) {
    solutionCount = 1;
  } else {
    findNSolutions(root, 0)
  }
  return solutionCount;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution;
  var root = new Board({'n': n});

  findASolution = function(node, row) {
      var child = new Board(node.rows());
      if (row > n - 1) {
        solution = child.rows();;
        return;
      } else { 
        for (var col = 0; col < n; col++) {
          child.togglePiece(row, col);
          if (!child.hasAnyQueenConflictsOn(row, col)) {
            findNSolutions(child, row + 1);
          }
          child.togglePiece(row, col);
        }
      }
    }
    if (n === 1) {
      root.togglePiece(0,0);
      return root.rows();
    } else {
      findASolution(root, 0)
    }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var root = new Board({'n': n});

  findNSolutions = function(node, row) {
      var child = new Board(node.rows());
      if (row > n - 1) {
        solutionCount++;
        return;
      } else { 
        for (var col = 0; col < n; col++) {
          child.togglePiece(row, col);
          if (!child.hasAnyQueenConflictsOn(row, col)) {
            findNSolutions(child, row + 1);
          }
          child.togglePiece(row, col);
        }
      }
    }
    if (n === 1) {
      solutionCount = 1;
    } else {
      findNSolutions(root, 0)
    }

    console.log('Number of solutions for ' + n + ' queens:', solutionCount);
    return solutionCount;
  };
