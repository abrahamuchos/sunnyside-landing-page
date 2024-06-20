import Image from "./Image.jsx";
import Text from "./Text.jsx";

import eggImgDesktop from '../assets/images/desktop/image-transform.jpg'
import eggImg from '../assets/images/mobile/image-transform.jpg'
import cupImgDesktop from '../assets/images/desktop/image-stand-out.jpg';
import cupImg from '../assets/images/mobile/image-stand-out.jpg';

export default function Services() {


  return (
    <>
      <section className='grid sm:grid-cols-2'>
        <Image srcMobile={eggImg} srcDesktop={eggImgDesktop} alt='Image Transform your brand' className='sm:order-2'/>
        <Text
          title='Transform your brand'
          description='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
          cta={{label: 'Lean more', link: 'https//:google.com', bgColor: 'bg-Yellow'}}
          className='sm:order-1'
        />
      </section>

      <section className='grid sm:grid-cols-2'>
        <Image srcMobile={cupImgDesktop} srcDesktop={cupImg} alt='Image Transform your brand' className='sm:order-1'/>
        <Text
          title='Stand out to the right audience'
          description='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
          cta={{label: 'Lean more', link: 'https//:google.com', bgColor: 'bg-Soft-red'}}
          className='sm:order-2'
        />
      </section>
    </>
  );
}