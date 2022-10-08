import './App.css';
import React, { useEffect, useState } from 'react';
import SingleCard from './components/SingleCard';


const cardImages = [
  {"src" : "/img/helmet-1.png"},
  {"src" : "/img/potion-1.png"},
  {"src" : "/img/ring-1.png"},
  {"src" : "/img/scroll-1.png"},
  {"src" : "/img/shield-1.png"},
  {"src" : "/img/sword-1.png"}
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

  setCards(shuffleCards)
  setTurns(0)
  }

  useEffect(() => {
    if(choiceOne && choiceTwo){

      if(choiceOne.src === choiceTwo.src){
          console.log("This cards match!!!!")
          resetTurn();
      }else{
        console.log("This cards dont match !!!")
        resetTurn()
      }
    }
  },[choiceOne, choiceTwo]);

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
                />
              ))}
          </div>
      </div>
    </>
  );
} 

export default App;
