"use client";
import React from 'react'
import { SlArrowRight,SlArrowLeft} from "react-icons/sl";
import Card from './Card'
const Slider = (props) => {

    const id = props.sliderId
    const slideLeft = () => {
        let slider = document.getElementById(id);
        slider.scrollLeft = slider.scrollLeft - 486;
      };
    
      const slideRight = () => {
        let slider = document.getElementById(id);
        slider.scrollLeft = slider.scrollLeft + 486;
      };
    const movies = props.movies
  return (
    <>
    {movies.length==0
      ?<></> //if there  is no data render nothing
      :<div className='card-container m-auto  relative '>
      <h1 className='mx-2 mt-5'>{props.title}</h1>
      <div className='flex'>
      <button className="not-for-phone absolute -left-2 bottom-40 bg-black p-2 rounded-full" onClick={slideLeft}><SlArrowLeft className='relative right-0.5 text-lg '/></button>
      <div id={id} className='no-scrollbar flex overflow-x-scroll'>
      
        {movies.map(movie => {
          return <Card key={movie.id} type={props.type} movie={movie}/>
        })}
      </div>
      <button className="not-for-phone bg-black p-2 rounded-full absolute -right-2 bottom-40" onClick={slideRight}><SlArrowRight className='relative left-0.5 text-lg' /></button>
      </div>
      </div>
    }
  </>
  )
}

export default Slider