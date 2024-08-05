/**
 *
 * @param {string|object} srcProfile
 * @param {string} content
 * @param {string} name
 * @param {string|null} charge
 * @param {string|null} className
 * @return {JSX.Element}
 * @constructor
 */
export default function Testimonial({srcProfile, content, name, charge, className }) {


  return (
    <div className={`h-[270px] mb-14 flex flex-col justify-between items-center
      md:h-[350px] md:mb-0
      lg:h-[300px]
      ${className ?? ''}`}
    >
      <img src={srcProfile} alt={name} className='rounded-full w-[85px]'/>
      <p className='px-10 text-center text-Dark-grayish-blue
        md:px-5
        lg:px-10'
      >
        {content}
      </p>
      <div className='text-center'>
        <h2 className='font-Fraunces-900 font-semibold text-lg text-Very-dark-desaturated-blue'>
          {name}
        </h2>
        <span className='text-Grayish-blue'>{charge ?? ''}</span>
      </div>
    </div>
  );
}