import React from 'react'

export default function NavItem({name,Icon}) {
  return (
    <div className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 duration-400 mb-3'>
      <Icon/>
      <h2 className=''>{name}</h2>
    </div>
  )
}
