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
    <Link scroll={true} href={"/"+props.type+"/"+props.movie.id} className='mx-2.5 relative'>  
      
        {props.movie.poster_path == null
        ?<div className=' bg-blue-500 bg-opacity-40 h-[225px] w-[150px] rounded-xl text-center flex items-center'>
          NO POSTER AVAILABLE</div>

        :<div className='relative h-[225px] w-[150px]'> 
        <Image fill quality={100} sizes='100vw 100vw' className=' transition-all rounded-lg ' 
        draggable='false' src={img_base_url + props.movie.poster_path} alt="poster"/>
        </div>  
      }
      <div className='absolute left-3  bottom-[4.5rem]'>
        <RatingCircle rating={props.movie.vote_average.toString().slice(0,3)}/>
      </div>
      <h1 className='mt-5 max-w-[150px] text-base line-clamp-2 '>{props.movie.title}</h1>
      <h1 className=' text-gray-500 text-sm font-normal'>{date}</h1>
    </Link>
  )
}

export default Card