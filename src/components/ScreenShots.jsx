import React from 'react'
import img1 from '../assets/img/app-screenshots/1.png';
import img2 from '../assets/img/app-screenshots/2.png';
import img3 from '../assets/img/app-screenshots/3.png';
// import img4 from '../assets/img/app-screenshots/4.png';
import OwlCarousel from 'react-owl-carousel';
const ScreenShots = () => {

    const responsiveOwlCarouselOpt = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }

    return (
        <section className="app-screenshots section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h2>app <span>screenchots</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <OwlCarousel className='owl-carousel screenshots-carousel' loop margin={10} nav responsiveClass={true} responsive={responsiveOwlCarouselOpt}>
                        <div className="screenshot-item">
                            <img src={img1} alt="screenshot" />
                        </div>
                        <div className="screenshot-item">
                            <img src={img2} alt="screenshot" />
                        </div>
                        <div className="screenshot-item">
                            <img src={img3} alt="screenshot" />
                        </div>
                        <div className="screenshot-item">
                            <img src={img1} alt="screenshot" />
                        </div>
                        <div className="screenshot-item">
                            <img src={img2} alt="screenshot" />
                        </div>
                    </OwlCarousel>;

                </div>
            </div>
        </section>
    )
}

export default ScreenShots
