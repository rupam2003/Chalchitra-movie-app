import React from 'react'
import Header from '@/app/Components/Header'
const loading = () => {
  return (
    <div
    className=" h-screen overflow-y-scroll">
      <Header/>
      <article className="detail-page flex m-auto">
        
    
      <div className='img-container loading-bar mx-2 min-w-[220px] h-[330px] rounded-xl '></div>        
      <section className='details mx-12'>
          <h1 className='mb-3 h-6 w-[35vw] max-w-60 loading-bar'></h1>
          <h1 className='my-3 h-4 w-[30vw] max-w-60 loading-bar'></h1>
          
          <div className='rounded-xl my-2 loading-bar h-4 w-40 flex items-center'>
          </div>
          
          <p className='my-3 loading-bar h-4 w-[60vw] max-w-[25rem]'></p>
          <p className='my-3 loading-bar h-4 w-[60vw] max-w-[25rem]'></p>
          <p className='my-3 loading-bar h-4 w-[60vw] max-w-[25rem]'></p>
          <p className='my-3 loading-bar h-4 w-[40vw] max-w-[15rem]'></p>

        
        </section>
      </article>

      <div className='card-container m-auto   '>
      <h1 className='mb-2 h-6 w-20 loading-bar mx-2 mt-5'></h1>
      <div className='flex'>
      <div className='no-scrollbar flex '>
        <div className='loading-bar m-[6px] min-w-[150px] h-[230px] '></div>        
        <div className='loading-bar m-[6px] min-w-[150px] h-[230px] '></div>        
        <div className='loading-bar m-[6px] min-w-[150px] h-[230px] '></div>        
        <div className='loading-bar m-[6px] min-w-[150px] h-[230px] '></div>        
        <div className='loading-bar m-[6px] min-w-[150px] h-[230px] '></div>        

        
      </div>


      </div>
      </div>
      
    </div>
  )
}

export default loading
