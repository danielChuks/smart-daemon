import React, { useState } from 'react'
import cardsArray from './cardsArray'
import "./board.css"
import blank from '../images/blank.png'

  
function Board() {
    let cardChosen = [];
    let cardChosenIds = [];
    const [cardsValue, setCardsValue] = useState(blank)

    cardsArray.sort(() =>  0.5 - Math.random())
        return (
            <div className='grid'>
                {cardsArray.map((card, index) => {
                    console.log(card.image)
                    return(
                        <div key={index} onClick={() => flipedCard(index, card)}>
                            <img src={cardsValue} alt={"not found"}/> 
                        </div>
                    )
                })} 
        </div>
    )
    function flipedCard(index, card){
        const cardId  = index;
        cardChosen.push(cardsArray[cardId].name)
        cardChosenIds.push(cardId)
        if(cardChosen.length == 2){
            setTimeout(checkMatch, 500)
        }
    }

    function checkMatch(){
        
        //console.log(cardsValue)
    }

}


export default Board;