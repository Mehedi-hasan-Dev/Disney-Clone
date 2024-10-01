import React from 'react'
import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import starWar from './../assets/Images/starwar.png'

import disneyV from './../assets/Videos/disney.mp4' 
import marvelV from './../assets/Videos/marvel.mp4' 
import nationalGv from './../assets/Videos/nationalG.mp4' 
import pixarV from './../assets/Videos/pixar.mp4' 
import starWarV from './../assets/Videos/starWars.mp4' 

export default function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starWar,
            video:starWarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGv
        },

    ]


  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 container'>
     {productionHouseList.map((item,index)=>
     <div key={index} className='relative border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800'>
        <video src={item.video} muted loop playsInline className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50 hover:play" 
  onMouseEnter={(e) => e.target.play()} 
  onMouseLeave={(e) => e.target.pause()} />

        <img src={item.image} className='w-full z-[1]'/>
        
     </div>
    )}
    </div>
  )
}
