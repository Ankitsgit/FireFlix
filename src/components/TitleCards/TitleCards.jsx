
import React, { useEffect, useRef, useState } from "react";
import './TitleCards.css'

import cards_data from '../../assets/cards/Cards_data'

function TitleCards({title, category}) {

    const cardsRef = useRef();
    const handelWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handelWheel);
  }, []);


  return (
    <div className='title-cards'>
      <h2>{title?title :"Popular On Fireflix" }</h2>
      <div className="card-list" ref={cardsRef}>
        {/* //mapping cards_data */}
        {cards_data.map((card ,index)=>{
            return <div className="card"  key={index}>
                <img src={card.image}alt="" />
                <p>{card.name}</p>

            </div>

        })}
      </div>
    </div>
  )
}

export default TitleCards
