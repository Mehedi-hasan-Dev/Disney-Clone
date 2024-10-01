import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import self from './../assets/Images/self.jpg'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import NavItem from './NavItem';



const menu=[
    {
        name:'HOME',
        icon:HiHome
    },
    {
        name:'SEARCH',
        icon:HiMagnifyingGlass
    },
    {
        name:'WATCH LIST',
        icon:HiPlus
    },
    {
        name:'ORIGINALS',
        icon:HiStar
    },
    {
        name:'MOVIES',
        icon:HiPlayCircle
    },
    {
        name:'SERIES',
        icon:HiTv
    }
]
export default function Navbar() {

    const [toggle,setToggle] = useState(false);
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]


  return (
   

    <div className='flex items-center justify-between p-5'>
      <div className="flex items-center gap-8">
      <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
      <div className='hidden md:flex gap-8'>
      {menu.map((item,index)=>(
        <NavItem key={index} name={item.name} 
        Icon={item.icon}/>
      ))}
      </div>

      <div className='flex gap-5 md:hidden'>
      {menu.map((item,index)=>index<3&&(
        <NavItem key={index} name={''} 
        Icon={item.icon}/>
      ))}

      <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
        <NavItem name={''} Icon={HiDotsVertical}/>
        {toggle?<div className='absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4 rounded'>
      {menu.map((item,index)=>index>2&&(
        <NavItem name={item.name} 
        Icon={item.icon}/>
      ))}
            
        </div>:null}
      </div>
      </div>
      </div>
      <img src={self} className='w-[50px] rounded-full' />
    </div>
  )
}
