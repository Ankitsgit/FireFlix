
import React, { useEffect, useRef, useState } from "react";
import './TitleCards.css'

import cards_data from '../../assets/cards/Cards_data'

function TitleCards({title, category}) {

    const [apiData ,setApiData] =useState([]);

    const cardsRef = useRef();

    const options = {
      method: 'GET',
      headers: {

        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2Y5ZWI3NzBjZTZjOGZiNWU0ZDE1YmMyNWVkNTE4NyIsIm5iZiI6MTc1MTUyNDg0My41MTYsInN1YiI6IjY4NjYyNWViMjZhMzE3OTJhNDljMmUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WI0kTlzH5USi4IiBkeQDCQ3otPV7kujIDOIRm2t8Y5A'
        }
      };


    const handelWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
         fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
          .then(res => res.json())
          // .then(res => console.log(res))
          .then(res => setApiData(res.results))


          .catch(err => console.error(err));


    cardsRef.current.addEventListener("wheel", handelWheel);
  }, []);


  return (
    <div className='title-cards'>
      <h2>{title?title :"Popular On Fireflix" }</h2>
      <div className="card-list" ref={cardsRef}>
        {/* //mapping cards_data */}
        {apiData.map((card ,index)=>{
            return <div className="card"  key={index}>
                <img src={`https://image.tmdb.org/t/p/original`+card.backdrop_path}alt="" />
                <p>{card.original_title}</p>

            </div>

        })}
      </div>
    </div>
  )
}

export default TitleCards
