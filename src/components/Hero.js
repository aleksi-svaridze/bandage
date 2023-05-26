import HeroBg from '../imgs/hero-bg.png';
import Twitter from '../icons/twitter-icon-blue.svg';
import Facebook from '../icons/facebook-icon-blue.svg';
import Linkedin from '../icons/linkedin-icon-blue.svg';
import Instagram from '../icons/instagram-outlined-blue.svg';

const Hero = () => {
    return (
        <div className='hero-section'>
          
            <div className="container">
                <div className="row gy-5">
                    <div className="col-12 col-lg-5 order-lg-1 order-2">
                        <div className='d-flex flex-column justify-content-center h-100'>
                            <h5 className='text-uppercase fw-bold fs-6 m-0'>contact us</h5>
                            <h1 className='fw-bold fs-58 my-3 my-xl-5'>Get in touch today!</h1>
                            <p className='fw-normal fs-5 m-0'>We know how large objects will act,<br /> but things on a small scale</p>

                            <div className='my-4-5 d-flex flex-column row-gap-2 row-gap-xl-3'>
                                <p className='fs-4 text-capitalize m-0'>Phone: +451 215 215</p>
                                <p className='fs-4 text-capitalize m-0'>Fax: +451 215 215</p>
                            </div>
                            
                            <div className='d-flex column-gap-34'>
                                <img src={Twitter} className='w-30' alt="" />
                                <img src={Facebook} className='w-30' alt="" />
                                <img src={Instagram} className='w-30' alt="" />
                                <img src={Linkedin} className='w-30' alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-7 text-center order-lg-2 order-1 text-lg-end">
                          <img src={HeroBg} className='w-80' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;