import React from 'react'
import { getMovieCredits, getMovieDetails, getMoviesRecomendetion, getSimilarMovies } from '../../../../utils/request'
import Image from 'next/image'
import Slider from '@/app/Components/Slider'
import Header from '@/app/Components/Header'
import RatingCircle from '@/app/Components/RatingCircle'
import CastSlider from '@/app/Components/CastSlider'
const page = async ({params}) => {
  
  const movieDetails = await getMovieDetails(params.id)
  const movieCredits = await getMovieCredits(params.id)
  const similar = await getSimilarMovies(params.id)
  let director = "" 
  movieCredits.crew.forEach( person => {

    if(person.job == 'Director')
      director = person.name
  });
  

  const img_base_url = 'https://image.tmdb.org/t/p/w1280/'
  const img_base_url_lowQuality = 'http://www.themoviedb.org/t/p/w300_and_h450_face'
  return (
    
    <div className='h-screen overflow-y-scroll'>
      <Header/>
      <article
      style={movieDetails.backdrop_path!=null?{ backgroundImage:`linear-gradient(#000000b1,#000000b1,#000000b1,#04152d),url(${img_base_url + movieDetails.backdrop_path})`}:{}}
       className=" bg-no-repeat bg-center min-h-[550px] detail-page flex items-center">
        
    { movieDetails.poster_path == null
      ?<div className='img-container mx-7 mt-2 bg-blue-500 bg-opacity-40 min-w-[220px] h-[330px] rounded-lg flex justify-center items-center'>
        NO POSTER AVAILABLE
        </div>        
      
      : <div className='img-container mt-2 mx-7 relative min-w-[270px] h-[405px]'>
        <Image priority quality={100} sizes='100vw 100vw' fill className='  rounded-lg' draggable='false' src={img_base_url_lowQuality + movieDetails.poster_path} alt="poster"/>
        </div>
    
    }        

      
        <section className='details'>
          <h1 className='font-bold text-3xl'>{movieDetails.title} ({movieDetails.release_date.slice(0,4)})</h1>
          <h1 className='my-1 text-gray-500 text-lg '><i>{movieDetails.tagline}</i></h1>
          
          <div className='flex items-center'>
            <h1 className='mr-2'>Rating :</h1>
            <RatingCircle rating={movieDetails.vote_average.toString().slice(0,3)}/>
            <h1 className='ml-8'>Runtime : <span className='font-light'>{movieDetails.runtime} mins</span></h1>
            
          </div>
          
          <h1 className='my-1 text'><i>Directed By</i> <span className='font-bold'>{director}</span></h1>
          <p className='mb-5'>{movieDetails.overview}</p>
        </section>
      </article>
      <CastSlider sliderId='cast' cast={movieCredits.cast}/>

      
    </div>
    
        
  )
}

export default page