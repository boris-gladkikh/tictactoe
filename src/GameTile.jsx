const GameTile = ({ value, handleTileClick }) => {
  const valueClass = value ? "gameTile filled" : "gameTile";
  return (
    <div className={valueClass} onClick={handleTileClick}>
      {value}
    </div>
  );
};

export default GameTile;
