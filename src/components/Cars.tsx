"use client"
import React from 'react'
import Image from 'next/image'
import { useState,useEffect } from 'react'

const images = [
    "/carred.png",
    "/cariris.png",
    "/caryellow.png",
    "/cargrey.png",
]

function Cars() {
    const  [currentIndex,setCurrentIndex] = useState<number>(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex)=>(prevIndex + 1) % images.length)
        },1000)

        return () => clearInterval(interval)
    },[])

  return (
    <div className="relative">
      
      <Image src={`${images[currentIndex]}`} alt={'car'} width={200} height={300} className='animate-bounce'/>
    </div>
  )
}

export default Cars