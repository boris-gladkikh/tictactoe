export const determineWinner = (moves) => {
  let winner = undefined;
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
      winner = moves[a];
      break;
    }
  }
  if (winner === "X") winner = "Player One";
  if (winner === "O") winner = "Player Two";
  return winner;
};
