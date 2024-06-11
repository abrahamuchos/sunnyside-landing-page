import hamburgerIcon from "../assets/images/icon-hamburger.svg"
import { useState } from "react";

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(/**@type{boolean} showMenu */false)

  /**
   * Hide or show menu
   */
  const toggleMenu = () => {
    setShowMenu( prevState => !prevState)
  }


  return (
    <nav>
      <ul
        className={`${showMenu ? 'flex' : 'hidden'} bg-white absolute left-0 right-0 w-[329px] h-[305px] top-[106px] 
        mx-auto py-[20px] z-50 flex-col items-center place-content-around text-Dark-grayish-blue text-lg 
        after:content-[""] after:absolute after:top-[-20px] after:right-0 after:border-[12px] after:border-t-transparent 
        after:border-b-white after:border-l-transparent after:border-r-white
        sm:relative sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:justify-between sm:top-0 sm:w-[400px] sm:h-[56px]
        sm:text-White
        `}
      >
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Services</li>
        <li className='cursor-pointer'>Projects</li>
        <li className='cursor-pointer bg-Yellow w-[140px] h-[56px] grid place-content-center rounded-full
          font-Fraunces-700 uppercase text-Very-dark-desaturated-blue
          sm:bg-White sm:hover:bg-opacity-25 sm:hover:text-white'
        >
          Contact
        </li>
      </ul>
      <div className='cursor-pointer sm:hidden'>
        <img src={hamburgerIcon} alt="hambuger-icon" onClick={toggleMenu}/>
      </div>
    </nav>);
}