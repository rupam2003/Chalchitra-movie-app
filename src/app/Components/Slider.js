"use client";
import React from 'react'
import { FaArrowRight,FaArrowLeft} from "react-icons/fa";
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
      :<div className='my-10 relative '>
<div className='flex w-screen  justify-between'>
        <h1 className='font-semibold text-xl my-4 ml-6'>{props.title}</h1>
        <div className='flex items-center'>
          <button className="not-for-phone mr-2  rounded-full" onClick={slideLeft}><FaArrowLeft className='relative right-0.5 text-md '/></button>
          <button className="not-for-phone mr-5  rounded-full" onClick={slideRight}><FaArrowRight className='relative left-0.5 text-md' /></button>
        </div>

        </div>      
        <div className='flex'>
      <div id={id} className='no-scrollbar [&>:first-child]:ml-5 [&>:last-child]:mr-5 flex overflow-x-scroll'>
      
        {movies.map(movie => {
          return <Card key={movie.id} type={props.type} movie={movie}/>
        })}
      </div>
      </div>
      </div>
    }
  </>
  )
}

export default Slider