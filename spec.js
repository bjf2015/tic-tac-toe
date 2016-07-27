function test(x, y) {
  var game = new TicTacToe();
  if (x) {
    game.mark(0, 0);
    game.mark(1, 0);
    game.mark(2, 0);
  }

  if (y) {
    game.mark(0, 0);
    game.mark(0, 1);
    game.mark(0, 2);

  }


  return game.checkWinner();
}
function horizontal_test() {
  return test(true, false)
}

function vertical_test() {
  return test(false, true);
}


function diagonal_test() {
  var game = new TicTacToe();
  game.mark(0, 0);
  game.mark(1, 1);
  game.mark(2, 2);

  return game.checkWinner();
}

console.log(horizontal_test());
console.log(vertical_test());
console.log(diagonal_test());

function it_should_return_true_for_every_row() {
  var game = new TicTacToe();
  game.mark(0,1);
  game.mark(1,1);
  game.mark(2,1);

  var second_line = game.checkWinner();

  game = new TicTacToe();
  game.mark(0,2);
  game.mark(1,2);
  game.mark(2,2);

  return horizontal_test() && second_line && game.checkWinner()

}

function it_should_return_true_for_every_column() {
  var game = new TicTacToe();
  game.mark(0,1);
  game.mark(1,1);
  game.mark(2,1);

  var second_line = game.checkWinner();

  game = new TicTacToe();
  game.mark(0,2);
  game.mark(1,2);
  game.mark(2,2);

  return horizontal_test() && second_line && game.checkWinner()

}
console.log(it_should_return_true_for_every_row());