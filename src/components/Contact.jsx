import React from 'react'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'



const Contact = () => {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h2>get in <span>touch</span></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="contact-info">
              <h3>For Any Queries and Support</h3>
              <div className="contact-info-item">
                <FaLocationArrow/>
                <h4>company location</h4>
                <p>19 xyz new York</p>
              </div>
              <div className="contact-info-item">
                <FaEnvelope/>
                <h4>Write to us at</h4>
                <p>info@mail.com</p>
              </div>
              <div className="contact-info-item">
                <FaPhone/>
                <h4>call us on</h4>
                <p>91 9654 2931 **</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="contact-form">
              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your name" required/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your email" required/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Phone"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Subject" required/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Your Message" required></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12"> 
                    <button className="btn btn-2 btn-block" type="submit">Send message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
