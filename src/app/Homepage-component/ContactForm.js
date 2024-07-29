'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact: '',
    write_note: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting form data:', formData);
      const response = await axios.post(
        'https://thesoftwareexperts.com/Trucking-techs/index.php/user/submit',
        formData,
        {
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Response:', response);
      alert(response.data.success || response.data.error);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      console.error('Error details:', error.toJSON());
      alert('There was an error submitting the form. Please try again later.');
    }
  };

  return (
    <div>
      <section className='section-3'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 ">
              <div className='sec-3-contact'>
                <h4 className='sec-3-title'>Contact</h4>
                <h2>Get In Touch Using The Form</h2>
                <p>Have any Question? Feel free to fill out this form and we will be in touch with you shortly.</p>
                <p>Set up a meeting to see us in person at</p>
                <p>2570 Matheson Blvd E, Mississauga, ON L4W 4Z3, Canada</p>
                <p>Call us at: +91 8965029288 | +1 437-577-3571</p>
                <p>Alternatively, you can email us at: <a href="mailto:inquiry@truckingtechs.com">inquiry@truckingtechs.com</a> | <a href="mailto:support@truckingtechs.com">support@truckingtechs.com</a></p>
                <h2>Follow Trucking Techs On Social Media</h2>
                <div className='social-icon-con sec-3-title'>
                  <Link href="https://www.linkedin.com/company/trucking-techs" target="_blank" ><i className="fa fa-linkedin social-icon"></i></Link>
                  <Link href="https://www.youtube.com/@TruckingTechs" target='_blank'><i className="fa fa-youtube-play social-icon"></i></Link>
                  <Link href="https://www.instagram.com/tuckingtechs?igsh=MTR0aDZibHVxcWp3Yw%3D%3D&utm_source=qr" target='_blank'><i className="fa fa-instagram social-icon"></i></Link>
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
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name*"
                          name="last_name"
                          value={formData.last_name}
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
                          name="contact"
                          value={formData.contact}
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
                          name="write_note"
                          value={formData.write_note}
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
