'use client'
import React from 'react'
import Image from 'next/image';
import { SlArrowRight,SlArrowLeft} from "react-icons/sl";
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
    <div className=' card-container m-auto relative '>
      <h1 className='mx-2 mt-2 text-lg'>Cast</h1>
      {
        cast.length==0
        ?<div className='card-container mx-auto text-center my-12'>SORRY! CAST DATA IS NOT AVAILABLE </div> //erorr handling if data not found
        :<div className='flex'>
    
    {/* disable/hide buttons if nothing to scroll */}
    { cast.length > 5  
    ?<button className="not-for-phone absolute -left-2 bottom-40 bg-black p-2 rounded-full" onClick={slideLeft}><SlArrowLeft className='relative right-0.5 text-lg '/></button>
    :<></>
    }       
        
        <div id={id} className='no-scrollbar flex overflow-x-scroll'>
        
          {cast.map(actor => {
              return <div key={actor.id} className='mx-[6px] transition-all '>  
                      
                      
                      {actor.profile_path == null 
                      ?<div className=' bg-blue-500 bg-opacity-40 h-[230px] w-[150px] rounded-xl text-center flex items-center hover:border-white'>
                      NO PHOTOS AVAILABLE
                      </div>  //error handling if photos not found
                      
                      : <div className='relative h-[230px] w-[150px]'>
                      <Image  fill sizes='100vw 100vw' className='  border-transparent border-2 rounded-xl' draggable='false' src={img_base_url + actor.profile_path} alt="poster"/>
                      </div>
                      }
                      <h1 className='mt-1 max-w-[150px] text-base line-clamp-1 '>{actor.original_name}</h1>
                      <h1 className=' text-gray-500 max-w-[150px] text-sm line-clamp-1'>{actor.character}</h1>
                  </div>
          })}
        </div>  
        {cast.length > 5
          ?<button className="not-for-phone bg-black p-2 rounded-full absolute -right-2 bottom-40" onClick={slideRight}><SlArrowRight className='relative left-0.5 text-lg' /></button>
          :<></>}        
        
        </div>
      }
      
      
    </div>
  )
}

export default CastSlider