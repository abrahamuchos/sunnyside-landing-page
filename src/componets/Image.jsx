/**
 *
 * @param {string|object} srcMobile
 * @param {string|object} srcDesktop
 * @param {string} alt
 * @param {string|null} className
 * @return {JSX.Element}
 * @constructor
 */
export default function Image({className, srcMobile, srcDesktop, alt = 'image' }) {


  return (
    <picture className={className}>
      <source media='(max-width:640px)' srcSet={srcMobile}/>
      <source media='(min-width:641px)' srcSet={srcDesktop}/>
      <img src={srcDesktop} alt={alt}/>
    </picture>
  );
}