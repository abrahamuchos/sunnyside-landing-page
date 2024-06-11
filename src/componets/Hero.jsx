import heroMobile from '../assets/images/mobile/image-header.jpg';
import heroDesktop from '../assets/images/desktop/image-header.jpg';

export default function Hero() {
  return (
    <main>
      <picture>
        <source media='(max-width:640px)' srcSet={heroMobile}/>
        <source media='(min-width:641px)' srcSet={heroDesktop}/>
        <img src={heroDesktop} alt="hero-image"/>
      </picture>
    </main>
  );
}