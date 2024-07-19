'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    writeNote: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send the data to an API
    console.log('Form data submitted:', formData);
  };
    return (
        <div>
        <section className='section-3'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 ">
              <div className='sec-3-contact'>
                <h4 className='sec-3-title'>Contact</h4>
                <h2 className='' >Get In Touch Using The Form</h2>
                <p>Have any Question? Feel free to fill out this fourm and we will be in touch with you shortly.</p>
                <p>Set up a meeting to see us in person at</p>
                <p>2570 Matheson Blvd E, Mississauga, ON L4W 4Z3 , Canada</p>
                <p>Call us at :  +91 8965029288 | +1 437-577-3571</p>
                <p>Alternatively you can email us at: <a href="mailto:inquiry@truckingtechs.com">inquiry@truckingtechs.com</a>   |   <a href="mailto:support@truckingtechs.com">support@truckingtechs.com</a></p>
                <h2 className=''>Follow Trucking Techs On Social Media </h2>
                <div className='social-icon-con sec-3-title'>
                <i class="fa fa-linkedin social-icon"></i>
                <i class="fa fa-twitter-square social-icon"></i>
                <i class='fa fa-youtube-play social-icon'></i>
                <i class="fa fa-instagram social-icon"></i>
                </div>
              </div>

            </div>
            <div className="col-lg-6 col-md-12 cont-from-col-2 mb-4">
              <div className="card cont-form-card">
                <div className="card-body">
                <form className='sec-3-cont-form' onSubmit={handleSubmit}>
      <h4 className='contact-h4 sec-3-title'>Send Us a Message</h4>
      <div className="row contact-form-row">
        <div className="col-lg-6 col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="First name*"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-lg-6 col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Last name*"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="row contact-form-row">
        <div className="col-12 mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="E-mail*"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="row contact-form-row">
        <div className="col-12 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row contact-form-row">
        <div className="col-12 mb-3">
          <textarea
            className="form-control"
            style={{ height: 85 }}
            placeholder="Write here.."
            name="writeNote"
            value={formData.writeNote}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <button className='btn btn-primary w-100' type="submit">Submit</button>
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
