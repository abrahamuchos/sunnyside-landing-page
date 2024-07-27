/**
 *
 * @param {{mobile: object|string|null, desktop: object|string|null, default: object|string, alt: string}} src - Image path
 * @param {{title: string, content: string, className: string}} text
 * @param {string|null} className
 * @param {string} order
 * @return {JSX.Element}
 * @constructor
 */
export default function ImageText({src, text, className , order =  'order-1'}) {


  return (
    <div className={`relative text-center ${order}`}>
      <picture className={className}>
        <source media='(max-width:640px)' srcSet={src?.mobile}/>
        <source media='(min-width:641px)' srcSet={src.desktop}/>
        <img src={src.default} alt={src.alt}/>
      </picture>
      <div className='absolute bottom-[15px] mb-10 px-10
        md:bottom-0 md:mb-2 md:px-5
        lg:mb-5 lg:px-32
        xl:mb-10 xl:px-44'
      >
        <h1 className={`${text.className} font-Fraunces-900 text-xl text-Dark-desaturated-cyan mb-5 
          lg:text-2xl
          xl:text-3xl`}
        >
          {text.title}
        </h1>
        <p className={`font-Barlow-600 ${text.className}`}>
          {text.content}
        </p>
      </div>
    </div>

  );
}