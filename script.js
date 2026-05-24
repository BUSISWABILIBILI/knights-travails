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

function knightMoves(start, end) {
  if (!isValidPosition(start) || !isValidPosition(end)) {
    throw new Error("Start and end positions must be between 0 and 7");
  }

  const queue = [[start]];
  const visited = new Set();

  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const currentPosition = path[path.length - 1];

    if (currentPosition.toString() === end.toString()) {
      return path;
    }

    const validMoves = getValidMoves(currentPosition);

    for (const move of validMoves) {
      const moveKey = move.toString();

      if (!visited.has(moveKey)) {
        visited.add(moveKey);
        queue.push([...path, move]);
      }
    }
  }
}

function printKnightPath(start, end) {
  const path = knightMoves(start, end);
  const moves = path.length - 1;

  console.log(`You made it in ${moves} moves! Here's your path:`);

  for (const position of path) {
    console.log(position);
  }
}

printKnightPath([0, 0], [1, 2]);
printKnightPath([0, 0], [3, 3]);
printKnightPath([3, 3], [4, 3]);
