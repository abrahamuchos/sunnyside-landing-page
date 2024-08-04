import Image from "./Image.jsx";

import imgMilkBottles from '../assets/images/mobile/image-gallery-milkbottles.jpg';
import imgMilkBottlesDesktop from '../assets/images/desktop/image-gallery-milkbottles.jpg';
import imgOrange from '../assets/images/mobile/image-gallery-orange.jpg'
import imgOrangeDesktop from '../assets/images/desktop/image-gallery-orange.jpg'
import imgCone from '../assets/images/mobile/image-gallery-cone.jpg';
import imgConeDesktop from '../assets/images/desktop/image-gallery-cone.jpg';
import imgSugar from '../assets/images/mobile/image-gallery-sugar-cubes.jpg';
import imgSugarDesktop from '../assets/images/desktop/image-gallery-sugarcubes.jpg';


export default function Gallery() {

  return (
    <section className='grid grid-cols-2
      md:grid-cols-4'
    >
      <Image srcMobile={imgMilkBottles} srcDesktop={imgMilkBottlesDesktop}/>
      <Image srcMobile={imgOrange} srcDesktop={imgOrangeDesktop}/>
      <Image srcMobile={imgCone} srcDesktop={imgConeDesktop}/>
      <Image srcMobile={imgSugar} srcDesktop={imgSugarDesktop}/>
    </section>
  );
}