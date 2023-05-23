import React from 'react'
import { FaGooglePlay, FaApple, FaWindows } from "react-icons/fa";

const Download = () => {
  return (
    <section className="app-download section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h2>Download <span>App</span></h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="app-download-item">
              <FaGooglePlay/>
              <h3>google play</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                fugiat.
              </p>
              <a href="#" className="btn btn-2">download app</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="app-download-item">
              <FaApple/>
              <h3>apple store</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                fugiat.
              </p>
              <a href="#" className="btn btn-2">download app</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="app-download-item">
              <FaWindows/>
              <h3>microsoft store</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                fugiat.
              </p>
              <a href="#" className="btn btn-2">download app</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
