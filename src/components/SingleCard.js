import "./SingleCard.css";

function SingleCard({ card }) {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front"></img>
        <img className="back" src="/img/card.png" alt="card back"></img>
      </div>
    </div>
  );
}

export default SingleCard;
