'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import { PiFilmReel } from "react-icons/pi";

const Header = () => {

  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    let input = document.getElementById('input').value
    
    router.push(`/search/query=${input}`)
  }
  return (
    <header className='bg-black'>
        <section className=' flex py-2 items-center justify-between'>
        <Link href={'/'}  className='flex font-bold logo  ml-5 text-2xl'>
          <div className='w-[90px] h-[40px] relative'>
            <Image quality={100} src="/images.png" fill/>
          </div>
          </Link>
          <form className='mx-2' onSubmit={handleSubmit}> 
            <input id='input' autoComplete='off' className='bg-blue-100 bg-opacity-10 pl-3 py-2 min-w-[15rem] text-xs  text-white outline-none rounded-full' placeholder='Search any movie...'/>
          </form>
        </section>
    </header>
  )
}

export default Header
