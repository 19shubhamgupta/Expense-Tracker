import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { toggleSideBar } from '../store/sideBarSlice'

const Hamburger = () => {
    const dispatch = useDispatch()
  return (
    
      
      <button
        className="md:hidden self-start p-2 m-2 text-4xl text-red-800"
        onClick={() => dispatch(toggleSideBar(true)) }
      >
        <GiHamburgerMenu />
      </button> 
  )
}

export default Hamburger
