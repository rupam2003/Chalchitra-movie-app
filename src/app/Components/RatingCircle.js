import React from 'react'

const RatingCircle = (props) => {
  return (
    <div style={{ backgroundImage:`conic-gradient(green 0deg,green ${props.rating*36}deg,white 45deg,white 315deg )`}} className='border-white border-2 flex justify-center items-center w-9 h-9 rounded-full bg-green-600'>
        <div className='text-sm font-semibold text-black flex justify-center items-center w-[26px] h-[26px] rounded-full  bg-white' >{props.rating} </div>
    </div>
  )
}

export default RatingCircle