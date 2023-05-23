import React from 'react'

import img1 from '../assets/img/testimonial/1.jpg';
import img2 from '../assets/img/testimonial/2.jpg';
import img3 from '../assets/img/testimonial/3.jpg';
import img4 from '../assets/img/testimonial/4.jpg';
import { FaQuoteRight, FaStar } from "react-icons/fa";
import OwlCarousel from 'react-owl-carousel';

const Testimonials = () => {

    const responsiveOwlCarouselOpt = {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        }
      }
  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h2>what our <span>client</span> say</h2>
            </div>
          </div>
        </div>
        <div className="row">
        <OwlCarousel className='wl-carousel testimonials-carousel' loop margin={10} nav responsiveClass={true} responsive={responsiveOwlCarouselOpt}>

        <div className="testimonials-item">
              <div className="img-box">
                <img src={img1} alt="testimonial"/>
                <FaQuoteRight/>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, exercitationem.</p>
              <h3>Adan Lovelace. </h3>
              <span>developer</span>
              <div className="rating">
              <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
            </div>
            <div className="testimonials-item">
              <div className="img-box">
                <img src={img2} alt="testimonial"/>
                <FaQuoteRight/>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, exercitationem.</p>
              <h3>Nikole Wirth. </h3>
              <span>developer</span>
              <div className="rating">
              <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
            </div>
            <div className="testimonials-item">
              <div className="img-box">
                <img src={img3} alt="testimonial"/>
                <FaQuoteRight/>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, exercitationem.</p>
              <h3>Ken Thompson. </h3>
              <span>developer</span>
              <div className="rating">
              <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
            </div>
            <div className="testimonials-item">
              <div className="img-box">
                <img src={img4} alt="testimonial"/>
                <FaQuoteRight/>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, exercitationem.</p>
              <h3>Barbara Sims. </h3>
              <span>developer</span>
              <div className="rating">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
            </div>
        </OwlCarousel>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
