import { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import TitleScreen from "./TitleScreen";
import WinnerModal from "./WinnerModal";
import { determineWinner } from "./utilities";

const Game = () => {
  const INIT_BOARD = [Array(9).fill(undefined)];

  const [isPlaying, setPlaying] = useState(false);
  const [message, setMessage] = useState(" ");
  const [winner, setWinner] = useState(undefined);
  const [winnerModal, setWinnerModal] = useState(false);
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [moves, setMoves] = useState(...INIT_BOARD);
  const [movesCount, setMovesCount] = useState(0);

  // opens winner modal!
  useEffect(() => {
    if (winner) {
      setWinnerModal(true);
      setMessage(`${winner} is Victorious!`);
    }
  }, [winner]);

  //checks for draw
  useEffect(() => {
    if (movesCount === 9) {
      setMessage("DRAW!");
    }
  }, [setMovesCount, movesCount]);

  const resetGame = () => {
    setMessage("");
    setIsPlayerOne(true);
    setWinner(undefined);
    setWinnerModal(false);
    setMoves(...INIT_BOARD);
    setMovesCount(0);
    setPlaying(false);
  };

  const startGame = () => {
    setPlaying(true);
    setMessage("Player One's Turn!");
  };

  const handleTileClick = (idx) => {
    if (moves[idx]) return;
    if (winner) return;
    setMovesCount((count) => count + 1);
    const value = isPlayerOne ? "X" : "O";
    let board = [...moves];
    board[idx] = value;
    setMoves(board);
    if (isPlayerOne) {
      setMessage("Player Two's Turn!");
    } else {
      setMessage("Player One's Turn!");
    }
    setIsPlayerOne(!isPlayerOne);
    setWinner(determineWinner(board));
  };

  if (isPlaying) {
    return (
      <>
        <WinnerModal
          winner={winner}
          modal={winnerModal}
          closeModal={() => setWinnerModal(false)}
        />
        <GameBoard
          tiles={moves}
          resetGame={resetGame}
          message={message}
          isPlayerOne={isPlayerOne}
          winner={winner}
          handleTileClick={handleTileClick}
        />
      </>
    );
  }
  return (
    <>
      <TitleScreen startGame={startGame} />
    </>
  );
};

export default Game;
