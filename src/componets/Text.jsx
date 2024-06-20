/**
 * @typedef {Object} ctaObject
 * @property {string} label
 * @property {string} link
 * @property {string} bgColor
 */

/**
 *
 * @param {string} title
 * @param {string} description
 * @param {ctaObject} cta
 * @param {string|null} className
 * @return {JSX.Element}
 * @constructor
 */
export default function Text({title, description, cta, className}) {


  return (
    <div className={`p-3 flex-col place-content-around ${className}
        h-[475px] text-center
        sm:h-[250px] sm:p-5
        md:h-auto md:my-0 md:p-10 md:text-start
        lg:h-[420px] lg:p-20
        xl:px-[15%] xl:py-[25%]`}
    >
      <h1 className='font-Fraunces-900 text-2xl text-Very-dark-desaturated-blue mb-5
        sm:text-lg
        lg:text-4xl'
      >
        {title}
      </h1>
      <p className='font-Barlow-600 text-lg text-Grayish-blue mb-7 leading-[1.9rem]
          sm:text-base
          lg:text-lg'
      >
        {description}
      </p>
      <div className='relative'>
        <a href={cta.link} className='uppercase font-Fraunces-700'>
          {cta.label}
        </a>
        <div className={`absolute w-[110px] h-[10px] rounded-full  -z-10 opacity-35 left-0 right-0 mx-auto top-[15px]
          md:left-0 md:mx-0 
          ${cta.bgColor ?? ''}`}
        >
        </div>
      </div>
    </div>
  );
}