import Testimonial from "./Testimonial.jsx";

import profileTestimonial0 from '../assets/images/image-emily.jpg';
import profileTestimonial1 from '../assets/images/image-thomas.jpg';
import profileTestimonial2 from '../assets/images/image-jennie.jpg';

export default function Testimonials() {

  return (
    <section className='bg-white flex justify-center items-center
      md:h-[60vh]
      lg:h-[40vh]
      xl:h-[75vh]
      2xl:h-[45vh]'
    >
      <div className='px-5 py-20
        lg:px-20'
      >
        <h1 className='mb-12 font-Fraunces-900 font-semibold font-Dark-grayish-blue text-Dark-grayish-blue text-center
          uppercase tracking-[0.3em] text-lg
          md:mb-14'
        >
          Client testimonials
        </h1>
        <div className="grid
          md:grid-cols-3 "
        >
          <Testimonial
            srcProfile={profileTestimonial0}
            content='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
            name='Emily R.'
            charge='Marketing Director'
          />
          <Testimonial
            srcProfile={profileTestimonial1}
            content='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
            name='Thomas S.'
            charge='Chief Operating Officer'
          />
          <Testimonial
            srcProfile={profileTestimonial2}
            content='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
            name='Jennie F.'
            charge='Business Owner'
            className='mb-0'
          />

        </div>
      </div>
    </section>
  );
}