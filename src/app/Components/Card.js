import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import RatingCircle from './RatingCircle';
const Card = (props) => {



  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];  
  let date = ''
  if(props.movie.release_date == "")
     date = "Not available"
  else{
    const d = new Date(props.movie.release_date);
    date =  `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  const img_base_url = 'http://www.themoviedb.org/t/p/w220_and_h330_face'
  
  
  return (
    <Link href={"/"+props.type+"/"+props.movie.id} className='m-[6px] relative'>  
      
        {props.movie.poster_path == null
        ?<div className=' bg-blue-500 bg-opacity-40 h-[230px] w-[150px] border-transparent border-2 rounded-xl text-center flex items-center hover:border-white'>
          NO POSTER AVAILABLE</div>

        :<div className='relative h-[230px] w-[150px]'> 
        <Image fill sizes='100vw 100vw' className=' transition-all border-transparent border-2 rounded-xl hover:border-white' 
        draggable='false' src={img_base_url + props.movie.poster_path} alt="poster"/>
        </div>  
      }
      <div className='absolute left-3 bottom-11'>
        <RatingCircle rating={props.movie.vote_average.toString().slice(0,3)}/>
      </div>
      <h1 className='mt-3 max-w-[150px] text-base line-clamp-1 '>{props.movie.title}</h1>
      <h1 className=' text-gray-500 text-sm font-normal'>{date}</h1>
    </Link>
  )
}

export default Card