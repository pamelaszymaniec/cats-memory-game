import "./SingleCard.css";

function SingleCard({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front"></img>
        <img
          className="back"
          src="/img/card.png"
          onClick={handleClick}
          alt="card back"
        ></img>
      </div>
    </div>
  );
}

export default SingleCard;
