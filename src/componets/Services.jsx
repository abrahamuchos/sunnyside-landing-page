import Image from "./Image.jsx";
import Text from "./Text.jsx";
import ImageText from "./ImageText.jsx";

import eggImgDesktop from '../assets/images/desktop/image-transform.jpg'
import eggImg from '../assets/images/mobile/image-transform.jpg'
import cupImgDesktop from '../assets/images/desktop/image-stand-out.jpg';
import cupImg from '../assets/images/mobile/image-stand-out.jpg';
import cherryImg from '../assets/images/mobile/image-graphic-design.jpg';
import cherryImgDesktop from '../assets/images/desktop/image-graphic-design.jpg';
import orangeImg from '../assets/images/mobile/image-photography.jpg';
import orangeImgDesktop from '../assets/images/desktop/image-photography.jpg';

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

      <section className='grid sm:grid-cols-2'>
        <ImageText
          order='order-1'
          src={{mobile: cherryImg, desktop: cherryImgDesktop, alt:'cherry image', default: cherryImgDesktop}}
          text={{
            title: 'Graphic design',
            content: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
            className: 'text-Dark-desaturated-cyan'
        }}

        />
        <ImageText
          order='order-2'
          src={{mobile: orangeImg, desktop: orangeImgDesktop, alt:'cherry image', default: cherryImgDesktop}}
          text={{title: 'Photography',
            content: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
            className: 'text-Dark-blue'
        }}
        />
      </section>
    </>
  );
}