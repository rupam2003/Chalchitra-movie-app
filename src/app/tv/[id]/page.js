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
  const img_base_url_lowQuality = 'http://www.themoviedb.org/t/p/w220_and_h330_face'
  return (
    <div
      className=" h-screen overflow-y-scroll bg-no-repeat bg-cover bg-center "
      style={{ backgroundImage:`linear-gradient(#04152df1,#04152df1),url(${img_base_url + TvDetails.backdrop_path})`}}>
        <Header/>
        <article className=" card-container detail-page flex m-auto">
        {TvDetails.poster_path == null
          ?<div className='img-container mx-2 bg-blue-500 bg-opacity-40 min-w-[220px] h-[330px] rounded-xl flex justify-center items-center'>
            NO POSTER AVAILABLE
            </div>

          :<div className='img-container relative min-w-[220px] h-[330px]'>
          <Image priority sizes='100vw 100vw' fill className='mx-2 transition-all border-transparent rounded-xl' draggable='false' src={img_base_url_lowQuality + TvDetails.poster_path} alt="poster"/>
        </div> 
        }
          <section className='details mx-12'>
            
            <h1 className='text-2xl'>{TvDetails.name} ({TvDetails.first_air_date.slice(0,4)})</h1>
            
            <h1 className='my-1 text-lg text-gray-500'><i>{TvDetails.tagline}</i></h1>
           
            <div className='flex items-center'>
              <h1 className='mr-2'>Rating :</h1>
              <RatingCircle rating={TvDetails.vote_average.toString().slice(0,3)}/>
              <h1 className='ml-8'>Seasons : <span className='font-light'>{TvDetails.seasons.length}</span></h1>

            </div>
              

            <p className='my-1 font-light max-w-[30rem] '>{TvDetails.overview}</p>

          </section>
        </article>
        <div className='px-3'>
        <CastSlider sliderId='tv-cast' cast={TvCredits.cast}/>
        <Slider type="tv" sliderId={"similarTv"} title = {"Similar Movies"} movies = {similar} />

      </div>

      
</div>  
  )
}

export default page