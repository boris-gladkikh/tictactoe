const WinnerModal = ({ winner, modal, closeModal }) => {
  const visibility = modal ? "" : "none";
  return (
    <div style={{ display: visibility }} className="winnerModal">
      <h2>{`You Win, ${winner}!`}</h2>
      <button onClick={closeModal}>CLOSE</button>
    </div>
  );
};

export default WinnerModal;
