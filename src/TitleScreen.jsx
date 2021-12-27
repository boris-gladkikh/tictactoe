const TitleScreen = ({ startGame }) => {
  return (
    <div className="container">
      <div className="titleLogo">
        <h1>TIC-TAC-TOE</h1>
        <h5>
          <em>The Tournament of Champions</em>
        </h5>
      </div>
      <button onClick={startGame}>PLAY</button>
    </div>
  );
};

export default TitleScreen;
