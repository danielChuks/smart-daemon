import './App.css';
import React, { useEffect, useState } from 'react';
import SingleCard from './components/SingleCard';


const cardImages = [
  {"src" : "/img/helmet-1.png", matched: false},
  {"src" : "/img/potion-1.png", matched: false},
  {"src" : "/img/ring-1.png", matched: false},
  {"src" : "/img/scroll-1.png", matched: false},
  {"src" : "/img/shield-1.png", matched: false},
  {"src" : "/img/sword-1.png", matched: false}
]



function App(){
  const [cards, setCards] = useState([])
  const [turns, setTurns] =  useState(0)
  const [choiceOne, setChoiceOne ] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);


  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

  setCards(shuffleCards);
  setTurns(0);
  }

  useEffect(() => {
    if(choiceOne && choiceTwo){
//We are checking if the both choice the user picked are same and if they are then we setCards using the previous cards function to map
//map through the previous card and check if the card source and the choice of card the user picked are same and if so, we return a new card array with 
//the value of the selected cards by the user mapped to true.
//else we return card like so i.e do nothing............... 
      if(choiceOne.src === choiceTwo.src){
          setCards(prevCards => {
            return prevCards.map(card => {
              if(card.src === choiceOne.src){
                return {...card, matched: true }
              }else{
                return card;
              }
            })
          }
            )
          resetTurn();
      }else{
        resetTurn()
      }
    }
    console.log(cards)  
  }, [choiceOne, choiceTwo]);
 

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  return (
    <>
      <div className='app'>
        <h2>Magic Match</h2>
        <button onClick={shuffleCards}>New Game</button>
          <div className='card-grid'>
              {cards.map(card => (
                <SingleCard 
                  key={card.id} 
                  card={card} 
                  handleChoice={handleChoice}
                  flipped={card === choiceOne || card === choiceTwo || card.matched}
                />
              ))}
          </div>
      </div>
    </>
  );
} 

export default App;
