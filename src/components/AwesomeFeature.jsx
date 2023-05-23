import React from 'react'
import { FaCheck, FaEdit, FaPaintBrush, FaCode } from "react-icons/fa";
import OwlCarousel from 'react-owl-carousel';
const AwesomeFeature = () => {

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
    <section className="features section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-title">
              <h2>awesome <span>features</span></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <OwlCarousel className='owl-carousel features-carousel' loop margin={10} nav responsiveClass={true} responsive={responsiveOwlCarouselOpt}>

            <div className="feature-item">
              <div className="icon">
                <FaCode />
              </div>
              <h3>Clean code</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Commodi, hic.
              </p>
            </div>
            <div className="feature-item">
              <div className="icon">
                <FaEdit />
              </div>
              <h3>Install Apps</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Commodi, hic.
              </p>
            </div>
            <div className="feature-item">
              <div className="icon">
                <FaPaintBrush />
              </div>
              <h3>pixel perfect design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Commodi, hic.
              </p>
            </div>
            <div className="feature-item">
              <div className="icon">
                <FaCheck />
              </div>
              <h3>web apps</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Commodi, hic.
              </p>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  )
}

export default AwesomeFeature
