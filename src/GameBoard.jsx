import GameTile from "./GameTile";
const GameBoard = ({ tiles, resetGame, message, handleTileClick }) => {
  return (
    <div className="container">
      <div className="message">
        <h2>{message}</h2>
      </div>
      <div className="gameBoard">
        {tiles.map((tile, idx) => {
          return (
            <GameTile
              key={idx}
              value={tile}
              handleTileClick={() => handleTileClick(idx)}
            />
          );
        })}
      </div>
      <div>
        <button onClick={resetGame}>RESET</button>
      </div>
    </div>
  );
};

export default GameBoard;
