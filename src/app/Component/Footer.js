import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white p-4 text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5>About Us</h5>
                <p>Some information about the company.</p>
              </div>
              <div className="col-md-4">
                <h5>Contact</h5>
                <ul className="list-unstyled">
                  <li>Phone: (555) 555-5555</li>
                  <li>Email: info@company.com</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Follow Us</h5>
                <ul className="list-unstyled d-flex justify-content-center">
                    <li className='mx-2'><i class="fa fa-facebook-f"></i></li>
                    <li className='mx-2'><i class="fa fa-twitter-square"></i></li>
                    <li className='mx-2'><i class='fa fa-youtube-play'></i></li>
                    <li className='mx-2'> <i class="fa fa-instagram "></i></li>
                </ul>
              </div>
            </div>
            <div className="mt-3">
              <p className="mb-0">&copy; {new Date().getFullYear()} Company Name. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      );
}

export default Footer;
