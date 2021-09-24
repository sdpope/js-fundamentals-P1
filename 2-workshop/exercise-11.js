function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid.
  // At each position of the grid there is either an "_" or a "#" character.
  // The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  var output = "";
  for (let x = 1; x <= 8; x++) {
    output = "";
    if (x % 2 != 0) { output = "#"; }
    else { output = "_"; }
    for (let y = 1; y <= 7; y++) {
      if (output.charAt(y - 1) === "#" ) {output += "_"; }
      else { output += "#"; }
    }
    console.log(output);
  }
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11

module.exports = exercise11;
