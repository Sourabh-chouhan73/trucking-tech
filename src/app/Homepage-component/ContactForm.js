import React from 'react';

const ContactForm = () => {
    return (
        <div>
        <section className='section-3'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 ">
              <div className='sec-3-contact'>
                <h4 className='sec-3-title'>Contact</h4>
                <h2 className='' >Get In Touch Using The Form</h2>
                <p>Have any Question? Feel free to fill out this fourm and we will be in touch with you shortly.</p>
                <p>Set up a meeting to see us in person at</p>
                <p>2570 Matheson Blvd E, Mississauga, ON L4W 4Z3 , Canada</p>
                <p>Call us at : +1 905-624-5959</p>
                <p>Alternatively you can email us at: SupportXpertdispatch.com</p>
                <h2 className=''>Follow Trucking Techs On Social Media </h2>
                <div className='social-icon-con sec-3-title'>
                <i class="fa fa-facebook-f social-icon"></i>
                <i class="fa fa-twitter-square social-icon"></i>
                <i class='fa fa-youtube-play social-icon'></i>
                <i class="fa fa-instagram social-icon"></i>
                </div>
              </div>

            </div>
            <div className="col-lg-6 col-md-12 cont-from-col-2">
              <div className="card cont-form-card">
                <div className="card-body">
                <form className='sec-3-cont-form'>
                <h4 className='contact-h4 sec-3-title'>Send Us a Message</h4>
                <div className="row contact-form-row">
                  <div className="col-lg-6 col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="First name*" />
                  </div>
                  <div className="col-lg-6 col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="Last name*" />
                  </div>
                </div>
                <div className="row contact-form-row">
                  <div className="col-12 mb-3">
                    <input type="email" className="form-control" placeholder="E-mail*" />
                  </div>
                </div>
                <div className="row contact-form-row">
                  <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Mobile" />
                  </div>
                </div>
                <div className="row contact-form-row">
                  <div className="col-12 mb-3">
                    <textarea className="form-control" style={{ height: 85 }} placeholder="Write here.."></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    <button className='btn btn-primary w-100'>Submit</button>
                  </div>
                </div>
              </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
}

export default ContactForm;
