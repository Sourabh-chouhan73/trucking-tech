import React from 'react';

const Footer = () => {
    return (
        <div className="trucking-footer text-white text-center">
          <div className="container">
            <div className="row">
              <h2>Get Started With Trucking Techs</h2>
            </div>
            <div className='row'>
              <div className='trucking-btn'>
                <button className='btn btn-primary my-4 text-white'>CHECK OUR PRICES</button>
              </div>
            </div>
            <div className="row">
              <div className='my-4 d-flex justify-content-left'>
                LOgo
              </div>
              <hr />
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12 footer-col-1 d-flex">
                <p><a href="">Privacy Policy </a></p> |
                <p><a href="">Website Terms of Service</a></p>|
                <p><a href="">Cookie Policy</a></p>|
                <p><a href="">Your Privacy Choices </a></p><p></p>|
                <p><a href="">Contact</a></p>

              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 footer-col-1">
                <p>© 2024 Samsara Inc.</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Footer;
