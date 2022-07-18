import React, { useContext, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { MdDarkMode } from 'react-icons/md';
import { BsSunFill } from 'react-icons/bs';
import { AiFillLeftCircle } from 'react-icons/ai';
import FriendsContext from '../../store/friends-context';


const CenterNav = ({ theme, setTheme }) => {

  const ctx = useContext(FriendsContext);

  return (
    <div className='center_nav flex'>
      <div className='input_control flex'>
        <label htmlFor='search_input flex'>
          <BiSearchAlt className='icons' />
        </label>
        <input 
          id='search_input' 
          type='text' 
          placeholder='search for friends...'
          onChange={e => ctx.search(e.target.value)}
        />
      </div>
      <button 
        onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')} 
        className='toggle_btn'
      >
        {theme === 'dark' ? <BsSunFill /> : <MdDarkMode />}
      </button>

      <button 
        className={`dicrecttions_btn ${ctx.ShowLeftbar ? 'rotate' : ''}`} 
        onClick={() => {
          ctx.setShowLeftbar(prevSt => !prevSt)
          ctx.setShowRightbar(prevSt => false)
        }}
      >
        <AiFillLeftCircle /> 
      </button>
      <button 
        className={`dicrecttions_btn right ${ctx.ShowRightbar ? 'rotate' : ''}`} 
        onClick={() => {
          ctx.setShowRightbar(prevSt => !prevSt)
          ctx.setShowLeftbar(prevSt => false)
        }}
      >
        <AiFillLeftCircle /> 
      </button>
    </div>
  )
}

export default CenterNav