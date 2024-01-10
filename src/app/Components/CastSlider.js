'use client'
import React from 'react'
import Image from 'next/image';
import { FaArrowRight,FaArrowLeft} from "react-icons/fa";
const CastSlider = (props) => {
    const id = props.sliderId
    const img_base_url = 'http://www.themoviedb.org/t/p/w220_and_h330_face'



    const slideLeft = () => {
        let slider = document.getElementById(id);
        slider.scrollLeft = slider.scrollLeft - 486;
      };
    
      const slideRight = () => {
        let slider = document.getElementById(id);
        slider.scrollLeft = slider.scrollLeft + 486;
      };
    const cast = props.cast
  return (
    <div className='my-10 relative '>
      <div className='flex w-screen  justify-between'>
        <h1 className='font-semibold text-xl my-4 ml-6'>Cast Members</h1>
        <div className='flex items-center'>
          <button className="not-for-phone mr-2 rounded-full" onClick={slideLeft}><FaArrowLeft className='relative right-0.5 text-md '/></button>
          <button className="not-for-phone mr-5 rounded-full" onClick={slideRight}><FaArrowRight className='relative left-0.5 text-md' /></button>
        </div>

        </div>
      {
        cast.length==0
        ?<div className='card-container mx-auto text-center my-12'>SORRY! CAST DATA IS NOT AVAILABLE </div> //erorr handling if data not found
        :<div className='flex'>
    
    {/* disable/hide buttons if nothing to scroll */}
          
        
        <div id={id} className='no-scrollbar [&>:first-child]:ml-5 [Fa:last-child]:mr-5 flex overflow-x-scroll'>
        
          {cast.map(actor => {
              return <div key={actor.id} className='mx-2.5  transition-all '>  
                      
                      
                      {actor.profile_path == null 
                      ?<div className=' bg-blue-500 bg-opacity-40 h-[225px] w-[150px] rounded-lg text-center flex items-center hover:border-white'>
                      NO PHOTOS AVAILABLE
                      </div>  //error handling if photos not found
                      
                      : <div className='relative h-[225px] w-[150px]'>
                      <Image  fill sizes='100vw 100vw' className=' rounded-xl' draggable='false' src={img_base_url + actor.profile_path} alt="poster"/>
                      </div>
                      }
                      <h1 className='mt-1 max-w-[150px] text-base line-clamp-1 '>{actor.original_name}</h1>
                      <h1 className=' text-gray-500 max-w-[150px] text-sm line-clamp-1'>{actor.character}</h1>
                  </div>
          })}
        </div>  
               
        
        </div>
      }
      
      
    </div>
  )
}

export default CastSlider