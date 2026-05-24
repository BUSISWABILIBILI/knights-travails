const knightDirections = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

function isValidPosition(position) {
  const [x, y] = position;

  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

function getValidMoves(position) {
  const [x, y] = position;

  return knightDirections
    .map(([moveX, moveY]) => [x + moveX, y + moveY])
    .filter(isValidPosition);
}

console.log(isValidPosition([0, 0]));
console.log(isValidPosition([7, 7]));
console.log(isValidPosition([8, 2]));

console.log(getValidMoves([0, 0]));
console.log(getValidMoves([3, 3]));
console.log(getValidMoves([7, 7]));
