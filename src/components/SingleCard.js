import React from "react"
import './SingleCard.css'

function singleCard ({ card, handleChoice }){

    const handleClick = () => { 
        handleChoice(card)
    }

    return(
        <div className='card'>
             <div>
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
 