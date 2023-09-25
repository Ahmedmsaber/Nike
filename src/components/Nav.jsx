import React, { useState } from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
function Nav() {
    let [open,setOpen]=useState(false);
  return (
    <header className='padding-x py-8 absolute z-50 w-full' >
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo}
                    alt='logo'
                    width={130}
                    height={29}
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'> 
                {
                    navLinks.map( (item) =>(
                        <li key={item.label}>
                            <a href={item.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray'>
                                    {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className='hidden max-lg:block' onClick={()=> setOpen(!open)}>
                <img src={hamburger} width={25} height={25}/>
            </div>
        </nav>
        {open ? <ul className='flex justify-start items-start mt-6 flex-col bg-white z-50 p-4 rounded-2xl shadow-3xl'> 
                {
                    navLinks.map( (item) =>(
                        <li className='m-3' key={item.label}
                        onClick={()=>setOpen(!open)}>
                            <a href={item.href}
                            className='font-montserrat leading-normal text-lg font-medium text-coral-red'>
                                    {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul> : ""}
    </header>
    
   
  )
}

export default Nav