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

const playLimit = 5;

function App(){
  const [cards, setCards] = useState([])
  const [turns, setTurns] =  useState(0)
  const [choiceOne, setChoiceOne ] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [scores, setScores] = useState(0)


  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    //We set each choices to null so on the new start of the came the choicesOne and ChoiceTwo has no values..............
    setChoiceOne(null);
    setChoiceTwo(null);
    

    //..................................
  setCards(shuffleCards);
  setTurns(0);
  setScores(0);
  }

  useEffect(() => {
    if(choiceOne && choiceTwo){
//disabled is set to true because we dont want any of the card to be clickable when we already have choiceOne and choiceTwo....
      setDisabled(true)
//We are checking if the both choice the user picked are same and if they are then we setCards using the previous cards function to map
//map through the previous card and check if the card source and the choice of card the user picked are same and if so, we return a new card array with 
//the value of the selected cards by the user mapped to true.
//else we return card like so i.e do nothing............... 
      if(choiceOne.src === choiceTwo.src){
          setCards(prevCards => {
            return prevCards.map(card => {
              if(card.src === choiceOne.src){
                setScores(scores + 1)
                return {...card, matched: true}
              }else{ 
                return card;
              }
            })
          }
            )
          resetTurn();
      }else{
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [cards, choiceOne, choiceTwo]);
 

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false);
  }

  useEffect(() => {
    if(turns < playLimit){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  }, [turns])

//This useEffect Automatically starts the came so on loading the page the user gets to see all the cards.................
useEffect(() => {
  shuffleCards()
}, [])
//......................................................

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }


  return (
    <>
      <div className='app'>
        <h2>Daemon Board</h2>
        <button onClick={shuffleCards}>New Game</button>
          <div className='card-grid'>
              {cards.map(card => (
                <SingleCard 
                  key={card.id} 
                  card={card} 
                  handleChoice={handleChoice}
                  flipped={card === choiceOne || card === choiceTwo || card.matched}
                  disabled={disabled}
                />
              ))}
          </div>
           <div className='gameDetails'>
            { turns < playLimit 
              ? <><p>You have played {turns} turns </p> <p>You have {scores} scores</p></> 
              : <><p className='gameOver'>Game Over </p> <p className='gameOver'> Your Total Score: {scores}</p></>
            }
            </div>
      </div>
    </>
  );
}

export default App;
