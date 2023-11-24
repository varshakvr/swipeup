import React, { useState, useEffect } from 'react';
import varsha from "../../assests/images/img1.jpeg";
import vinu from "../../assests/images/img2.jpeg";
import kokila from "../../assests/images/img3.jpeg";
import sai from "../../assests/images/img4.jpeg";
import hemanth from "../../assests/images/img5.jpeg";
import kishore from "../../assests/images/img6.jpeg";
import background from "../../assests/images/cardbg.jpeg";
import Styles from './Game.module.css';
import Confetti from 'react-confetti';

function Game() {
  const cardData = [
    { id: 1, imageSrc: varsha },
    { id: 2, imageSrc: vinu },
    { id: 3, imageSrc: kokila },
    { id: 4, imageSrc: sai },
    { id: 5, imageSrc: kishore },
    { id: 6, imageSrc: hemanth },
  ];

  const initialCards = [...cardData, ...cardData].sort(() => Math.random() - 0.5);

  const [cards, setCards] = useState(initialCards);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [solvedPairs, setSolvedPairs] = useState([]);
  const [isWinner, setIsWinner] = useState(false);

  // Separate state to track whether confetti should be displayed
  const [showConfetti, setShowConfetti] = useState(false);

  // Separate timeout IDs for card flipping and confetti
  const [cardFlipTimeout, setCardFlipTimeout] = useState(null);
  const [confettiTimeout, setConfettiTimeout] = useState(null);

  useEffect(() => {
    const checkForMatch = () => {
      if (flippedIndices.length === 2) {
        const [firstIndex, secondIndex] = flippedIndices;
        if (cards[firstIndex] && cards[secondIndex] && cards[firstIndex].id === cards[secondIndex].id) {
          setSolvedPairs([...solvedPairs, cards[firstIndex].id]);
          // Trigger confetti animation after a match
        }
        // Flip back the cards after a match
        setCardFlipTimeout(setTimeout(() => {
          setFlippedIndices([]);
        }, 1000)); // Set your desired delay for card flipping back
      }
    };

    checkForMatch();

    // Check for a win when all pairs are solved
    if (solvedPairs.length === cardData.length ) {
      setIsWinner(true);
      setConfettiTimeout(setTimeout(() => {
        setShowConfetti(true);
      }, 1000));
    }
  }, [flippedIndices]);

  const handleCardClick = (index) => {
    if (!flippedIndices.includes(index) && flippedIndices.length < 2) {
      setFlippedIndices([...flippedIndices, index]);
    }
  };
  return (
    <div className={Styles.maindiv}>
      <h1>Memory Card Game</h1>
      <div className={Styles.card_container}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${Styles.card} ${flippedIndices.includes(index) || solvedPairs.includes(card.id) ? Styles.flipped : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {flippedIndices.includes(index) || solvedPairs.includes(card.id) ? (
              <img src={card.imageSrc} alt={`Card ${card.id}`} />
            ) : (
              <img src={background} alt="Card Back" />
            )}
          </div>
        ))}
      </div>
      {isWinner && showConfetti && (
        <Confetti
          numberOfPieces={200}
          recycle={false}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}
    </div>
  );
}

export default Game;