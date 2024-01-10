import React from 'react'
import Card from '@/app/Components/Card'
import { searchMovies,searchTv } from '../../../../utils/request'
import Header from '@/app/Components/Header'
import Slider from '@/app/Components/Slider'
const page = async ({params}) => {
    
  
    const query = params.id.slice(8) 
    const movies = await searchMovies(query)
    const tvShows = await searchTv(query)
    const searchingFor = query.replaceAll("%20"," ")
{
  return (
    <div className='h-screen overflow-y-scroll  '>
      <Header/>
        <main className= ''>
          
          {movies.length> 0
          ? <Slider type="movies" sliderId={"MovieSearch"} title = {`Showing movies related to "${searchingFor}"`} movies = {movies}/>
          :<div className='card-container mx-auto text-center my-12'>NO MOVIES FOUND RELATED TO YOUR SEARCH</div>
        }
         {tvShows.length> 0
           ?<Slider type="tv" sliderId={"TvSearch"} title = {`Showing TV shows related to "${searchingFor}"`} movies = {tvShows}/>
           :<div className='card-container mx-auto text-center my-12'>NO TV SHOWS FOUND RELATED TO YOUR SEARCH</div>
         }
        </main>

    </div>
  )
}

  
}

export default page