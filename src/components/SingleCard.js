import React from "react"
import './SingleCard.css'

function singleCard ({ card, handleChoice, flipped, disabled }){

    const handleClick = () => { 
        //if disabled is true we dont want to allow the user to make a different choice.....but if its false we allow the user to make a choice
        if(!disabled){
            handleChoice(card);
        }   
    }

    return(
        <div className='card'>
             <div className={flipped ? "flipped" : ""}>
                <img className='front' src={card.src} alt="card front"/>
                <img 
                    className='back' 
                    src="/img/cover.png" 
                    alt='cover'
                    onClick={handleClick}
                    />
            </div>
         </div>
    )
}

export default singleCard;
 