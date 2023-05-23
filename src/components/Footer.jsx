import React, { useState } from 'react'

const Footer = () => {

  const [today, setToday] = useState(new Date().getFullYear())
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-col">
              <h3>About us</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iusto totam recusandae eius voluptates tempore.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-col">
              <h3>company</h3>
              <ul>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">terms & condition</a></li>
                <li><a href="#">latest blogs</a></li>
                <li><a href="#">app services</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-col">
              <h3>quick links</h3>
              <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">features</a></li>
                <li><a href="#">screenshots</a></li>
                <li><a href="#">pricing</a></li>
                <li><a href="#">testimonials</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-col">
              <h3>social page</h3>
              <ul>
                <li><a href="#">facebook</a></li>
                <li><a href="#">twitter</a></li>
                <li><a href="#">instagram</a></li>
                <li><a href="#">linkendin</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="copyright-text">&copy; {today} - React-App</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
