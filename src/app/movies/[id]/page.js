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
  const img_base_url_lowQuality = 'http://www.themoviedb.org/t/p/w220_and_h330_face'
  return (
    
    <div
    className=" h-screen bg-no-repeat bg-cover bg-center  overflow-y-scroll"
    style={movieDetails.backdrop_path!=null?{ backgroundImage:`linear-gradient(#04152df1,#04152df1),url(${img_base_url + movieDetails.backdrop_path})`}:{}}>
      <Header/>
      <article className="card-container detail-page flex m-auto">
        
    { movieDetails.poster_path == null
      ?<div className='img-container mx-2 bg-blue-500 bg-opacity-40 min-w-[220px] h-[330px] rounded-xl flex justify-center items-center'>
        NO POSTER AVAILABLE
        </div>        
      
      : <div className='img-container mx-2 relative min-w-[220px] h-[330px]'>
        <Image priority sizes='100vw 100vw' fill className='  rounded-xl' draggable='false' src={img_base_url_lowQuality + movieDetails.poster_path} alt="poster"/>
        </div>
    
    }        

      
        <section className='details mx-12'>
          <h1 className='text-2xl'>{movieDetails.title} ({movieDetails.release_date.slice(0,4)})</h1>
          <h1 className='my-1 text-gray-500 text-lg '><i>{movieDetails.tagline}</i></h1>
          
          <div className='flex items-center'>
            <h1 className='mr-2'>Rating :</h1>
            <RatingCircle rating={movieDetails.vote_average.toString().slice(0,3)}/>
            <h1 className='ml-8'>Runtime : <span className='font-light'>{movieDetails.runtime} mins</span></h1>
            
          </div>
          
          <h1 className='my-1 '><i>Directed By</i> <span className='font-bold'>{director}</span></h1>
          <p className=' font-light max-w-[30rem]'>{movieDetails.overview}</p>
        </section>
      </article>
      <div className='px-3'>
        <CastSlider sliderId='cast' cast={movieCredits.cast}/>
        <Slider type="movies" sliderId={"similar"} title = {"Similar Movies"} movies = {similar} />
      </div>
      
    </div>
    
        
  )
}

export default page