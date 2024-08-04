import Header from "./componets/Header.jsx";
import Hero from "./componets/Hero.jsx";
import Services from "./componets/Services.jsx";

import './App.css';
import Testimonials from "./componets/Testimonials.jsx";

function App() {

  return (
    <div className='max-w-[1440px] mx-auto relative'>
      <Header/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <div className="h-[100px] bg-red-400"></div>
    </div>
  )
}

export default App
