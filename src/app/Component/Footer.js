import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className="trucking-footer text-white text-center">
          <div className="container">
            <div className="row">
              <h2>Get Started With Trucking Techs</h2>
            </div>
            <div className='row'>
              <div className='trucking-btn'> Please Email Us for Pricing and Demo Information <b>inquiry@truckingtechs.com </b></div>
            </div>
            <div className="row">
              <div className='my-4 d-flex justify-content-left'>
                
              </div>
              <hr />
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12 footer-col-1 d-flex">
                <p><Link href='privacy-policy'>Privacy Policy</Link></p> |
                <p><Link href='terms-of-service'>Website Terms of Service</Link></p>|
                <p><a href="">Cookie Policy</a></p>|
                <p><a href="">Your Privacy Choices </a></p><p></p>|
                <p><Link href="contact-us">Contact</Link></p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 footer-col-1">
                <p>© 2024 Trucking Techs.</p>
                <div className=''>
                  <Link href="https://www.linkedin.com/company/trucking-techs" target="_blank" ><i className="fa fa-linkedin social-icon m-2"></i></Link>
                  <Link href="https://www.youtube.com/@TruckingTechs" target='_blank'><i className="fa fa-youtube-play social-icon m-2"></i></Link>
                  <Link href="https://www.instagram.com/tuckingtechs?igsh=MTR0aDZibHVxcWp3Yw%3D%3D&utm_source=qr" target='_blank'><i className="fa fa-instagram social-icon m-2"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Footer;
