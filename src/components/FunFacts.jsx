import React from 'react'
import img2 from '../assets/img/app-screenshots/2.png';


const FunFacts = () => {
  return (
    <section className="fun-facts section-padding">
      <div className="container">
        <div className="row">
          <div
            className="
              col-lg-6 
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <div className="fun-facts-img">
              <img src={img2} alt="fun facts" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title">
              <h2>fun <span>facts</span></h2>
            </div>
            <div className="fun-facts-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis ad rem voluptates nostrum sapiente aliquid eum?
                Necessitatibus, quaerat recusandae excepturi fugit modi libero
                sapiente incidunt est! Necessitatibus iusto odit nostrum
                eligendi optio amet natus praesentium!
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <div className="fun-facts-item style-1">
                    <h3>400</h3>
                    <span>downloads</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="fun-facts-item style-2">
                    <h3>200</h3>
                    <span>likes</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="fun-facts-item style-3">
                    <h3>500</h3>
                    <span>5 start rating</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="fun-facts-item style-4">
                    <h3>150</h3>
                    <span>awards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FunFacts
