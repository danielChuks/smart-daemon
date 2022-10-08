import React from "react"
import './SingleCard.css'

function singleCard ({ card, handleChoice, flipped }){

    const handleClick = () => { 
        handleChoice(card)
    }

    return(
        <div className='card'>
             <div className={flipped ? "flipped" : ""}>
                <img className='font' src={card.src} alt="card front"/>
                <img 
                    className='cover' 
                    src="/img/cover.png" 
                    alt='cover'
                    onClick={handleClick}
                    />
            </div>
         </div>
    )
}

export default singleCard;
 