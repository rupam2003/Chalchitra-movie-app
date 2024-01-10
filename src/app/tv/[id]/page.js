import React from 'react'
import { getTvCredits, getTvDetails,getSimilarTv } from '../../../../utils/request'
import Image from 'next/image'
import CastSlider from '@/app/Components/CastSlider'
import Slider from '@/app/Components/Slider'
import Header from '@/app/Components/Header'
import RatingCircle from '@/app/Components/RatingCircle'
const page = async ({params}) => {
  
  const TvDetails = await getTvDetails(params.id)
  const TvCredits = await getTvCredits(params.id)
  const similar = await getSimilarTv(params.id)
  const img_base_url = 'https://image.tmdb.org/t/p/w1280/'
  const img_base_url_lowQuality = 'http://www.themoviedb.org/t/p/w300_and_h450_face'
  return (
    <div className='h-screen overflow-y-scroll'>
        <Header/>
        <article
            style={TvDetails.backdrop_path!=null?{ backgroundImage:`linear-gradient(#000000b1,#000000b1,#000000b1,#04152d),url(${img_base_url + TvDetails.backdrop_path})`}:{}}
            className="bg-no-repeat bg-cover bg-center min-h-[550px] detail-page flex items-center">
        {TvDetails.poster_path == null
          ?<div className='mt-2 mx-7 img-container bg-blue-500 bg-opacity-40 min-w-[300px] h-[450px] rounded-xl flex justify-center items-center'>
            NO POSTER AVAILABLE
            </div>

          :<div className='mt-2 mx-7 img-container relative min-w-[300px] h-[450px]'>
          <Image quality={100} priority sizes='100vw 100vw' fill className=' transition-all  rounded-lg' draggable='false' src={img_base_url_lowQuality + TvDetails.poster_path} alt="poster"/>
        </div> 
        }
          <section className='details '>
            
            <h1 className='font-bold text-3xl'>{TvDetails.name} ({TvDetails.first_air_date.slice(0,4)})</h1>
            
            <h1 className='my-1 text-lg text-gray-500'><i>{TvDetails.tagline}</i></h1>
           
            <div className='flex items-center'>
              <h1 className='mr-2'>Rating :</h1>
              <RatingCircle rating={TvDetails.vote_average.toString().slice(0,3)}/>
              <h1 className='ml-8'>Seasons : <span className='font-light'>{TvDetails.seasons.length}</span></h1>

            </div>
              

            <p className='my-1  '>{TvDetails.overview}</p>

          </section>
        </article>
        <div>
        <CastSlider sliderId='tv-cast' cast={TvCredits.cast}/>

      </div>

      
</div>  
  )
}

export default page
