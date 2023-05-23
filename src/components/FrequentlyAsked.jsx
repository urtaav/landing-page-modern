import React from 'react'

const FrequentlyAsked = () => {
  return (
    <section className="faq section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h2>frequently <span>asked</span> queries</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div id="accordion">
              <div className="accordion-item">
                <div className="accordion-header collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-01" aria-expanded="true" aria-controls="collapseOne"> 
                  <h3>100% Fluid responsive - Fits any device perfectly </h3>
                </div>
                <div className="collapse" id="collapse-01" data-parent="#accordion" aria-expanded="true" aria-controls="collapseOne">
                  <div className="accordion-body">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita molestias tenetur numquam, iure minima enim voluptates nostrum blanditiis, officiis minus iste aspernatur sapiente eaque id rem itaque porro? Deserunt, quia.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-02" aria-expanded="true" aria-controls="collapseOne">
                  <h3>Clean code</h3>
                </div>
                <div className="collapse" id="collapse-02" data-parent="#accordion">
                  <div className="accordion-body">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita molestias tenetur numquam, iure minima enim voluptates nostrum blanditiis, officiis minus iste aspernatur sapiente eaque id rem itaque porro? Deserunt, quia.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-03" aria-expanded="true" aria-controls="collapseOne">
                  <h3>Flat, modern and clean desing </h3>
                </div>
                <div className="collapse" id="collapse-03" data-parent="#accordion">
                  <div className="accordion-body">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita molestias tenetur numquam, iure minima enim voluptates nostrum blanditiis, officiis minus iste aspernatur sapiente eaque id rem itaque porro? Deserunt, quia.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-04" aria-expanded="true" aria-controls="collapseOne">
                  <h3>Custom font support</h3>
                </div>
                <div className="collapse" id="collapse-04" data-parent="#accordion">
                  <div className="accordion-body">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita molestias tenetur numquam, iure minima enim voluptates nostrum blanditiis, officiis minus iste aspernatur sapiente eaque id rem itaque porro? Deserunt, quia.</p>
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

export default FrequentlyAsked
