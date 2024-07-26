import Header from "./componets/Header.jsx";
import Hero from "./componets/Hero.jsx";
import Services from "./componets/Services.jsx";

import './App.css';

function App() {

  return (
    <div className='max-w-[1440px] mx-auto relative'>
      <Header/>
      <Hero/>
      <Services/>
    </div>
  )
}

export default App
