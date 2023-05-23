import React from 'react'
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="pricing section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h2>pricing <span>plan</span></h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="pricing-plan">
              <div className="pricing-header">
                <h3>basic</h3>
              </div>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="price">99</span>
                <span className="period">/monthly</span>
              </div>
              <div className="pricing-body">
                <ul>
                  <li><FaCheck/>5GB bandwith</li>
                  <li><FaCheck/>free update</li>
                  <li><FaCheck/>high regulation printing</li>
                  <li><FaCheck/>branding</li>
                  <li><FaCheck/>another great feature</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#" className="btn btn-2">get started</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-plan">
              <div className="pricing-header">
                <h3>premium</h3>
              </div>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="price">149</span>
                <span className="period">/monthly</span>
              </div>
              <div className="pricing-body">
                <ul>
                  <li><FaCheck/>5GB bandwith</li>
                  <li><FaCheck/>free update</li>
                  <li><FaCheck/>high regulation printing</li>
                  <li><FaCheck/>branding</li>
                  <li><FaCheck/>another great feature</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#" className="btn btn-2">get started</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-plan">
              <div className="pricing-header">
                <h3>basic</h3>
              </div>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="price">199</span>
                <span className="period">/monthly</span>
              </div>
              <div className="pricing-body">
                <ul>
                  <li><FaCheck/>5GB bandwith</li>
                  <li><FaCheck/>free update</li>
                  <li><FaCheck/>high regulation printing</li>
                  <li><FaCheck/>branding</li>
                  <li><FaCheck/>another great feature</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#" className="btn btn-2">get started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
