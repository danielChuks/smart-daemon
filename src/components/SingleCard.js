import React from "react"
import './SingleCard.css'

function singleCard ({ card }){
    return(
        <div className='card'>
             <div>
                <img className='font' src={card.src} alt="card front"/>
                <img className='cover' src="/img/cover.png" alt='cover'/>
            </div>
         </div>
    )
}

export default singleCard;
 