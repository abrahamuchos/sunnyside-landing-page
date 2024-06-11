import heroMobile from '../assets/images/mobile/image-header.jpg';
import heroDesktop from '../assets/images/desktop/image-header.jpg';
import iconArrow from '../assets/images/icon-arrow-down.svg'

export default function Hero() {
  return (
    <main>
      <picture>
        <source media='(max-width:640px)' srcSet={heroMobile}/>
        <source media='(min-width:641px)' srcSet={heroDesktop}/>
        <img src={heroDesktop} alt="hero-image"/>
      </picture>

      <section className='absolute top-[120px] left-0 right-0 mx-auto
          sm:top-[150px]
          md:top-[110px]
          lg:top-[175px]
          xl:top-[190px]
          2xl:top-[210px]
      '>
        <p className='font-Fraunces-700 uppercase tracking-[7.5px] text-center text-White text-[40px]
          sm:text-[45px]
          lg:text-[55px]
          xl:text-[60px]
          2xl:text-[75px]
        '>
          We are creatives
        </p>
        <img src={iconArrow} alt="icon-arrow" className='mx-auto mt-[20%]
          sm:mt-[5%]
          md:mt-[3%]
          xl:mt-[7%]
          2xl:mt-[10%]
        '/>
      </section>

    </main>
  );
}