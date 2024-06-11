import Navbar from "./Navbar.jsx";

import logo from "../assets/images/logo.svg"

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
export default function Header() {


  return (
    <header className='absolute w-full px-6 pt-7 flex place-content-between sm:justify-between'>
      <img src={logo} alt="logo" className='sm:h-[30px] sm:self-center'/>
      <Navbar/>
    </header>
  );
}