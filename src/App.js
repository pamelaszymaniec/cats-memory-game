import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/cat-1.png" },
  { src: "/img/cat-2.png" },
  { src: "/img/cat-3.png" },
  { src: "/img/cat-4.png" },
  { src: "/img/cat-5.png" },
  { src: "/img/cat-6.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.floor(Math.random() * 10000000) }));
    setCards(shuffledCards);
    setTurns(0);
    console.log(shuffledCards);
  };

  return (
    <div className="App">
      <h1>Cats Memory</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
