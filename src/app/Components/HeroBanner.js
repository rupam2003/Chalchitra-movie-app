import React from 'react'
import { getImages } from '../../../utils/request'
import Header from './Header';

const HeroBanner = async () => {
    const image =await getImages(60059);
    const img_base_url = 'https://image.tmdb.org/t/p/w1280/'
  return (
    <div 
    style={{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4),#04152d),url(${img_base_url + image[0].file_path})`}}
    className=' bg-no-repeat bg-cover bg-top w-screen m-auto h-[350px] sm:h-[450px]'>

      
      <div className='h-[60%] flex flex-col justify-center items-center'>
        <h1 className='font-bold text-[50px]'>Welcome.</h1>
        <h1 className=' text-center text-2xl'>Millions of movies, TV shows and people to discover. Explore now.</h1>
      </div>

    </div>
  )
}

export default HeroBanner