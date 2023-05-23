import React from 'react'
import img1 from '../assets/img/app-screenshots/1.png';
import { FaPlay, FaPlus } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home d-flex align-items-center">
      <div className="effect-wrap">
        <FaPlus className='effect effect-1' />
        <FaPlus className='effect effect-2' />
        <FaPlus className='effect effect-3' />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="home-text">
              <h1>Best Mobile App Template for your Business</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus distinctio earum exercitationem libero molestias amet
                deserunt aut.
              </p>

              <div className="home-btn">
                <a href="#" className="btn btn-1">download app</a>
                <button className="btn btn-1 video-play-btn">
                  <FaPlay></FaPlay>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <div className="home-img">
              <div className="circle"></div>
              <img src={img1} alt="web app" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
