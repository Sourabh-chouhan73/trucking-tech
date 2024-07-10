import React from 'react';

const GetADemo = () => {
  return (
    <div>
      <section className='section-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
              <div className='sec-5-content'>
                <h2>Get a personl demo with our  seasoned transportation professionals</h2>
                <p className='pb-4'>Experience the power of Trucking Techs TMS for Shippers and Carriers with a personalized demo! Unlock seamless logistics management and efficiency with our cutting-edge platform.</p>
                <p><i class="fa fa-check icon-check"></i> Streamlined transportation operations</p>
                <p><i class="fa fa-check icon-check"></i> Cost-effective solutions</p>
                <p><i class="fa fa-check icon-check"></i> Real-time visibility into your business</p>
                <p><i class="fa fa-check icon-check"></i> Customizable interface to focus on your workflows</p>
                <p><i class="fa fa-check icon-check"></i> Better communication with your drivers and customers</p>
                <p className='pt-4'>See how your team can do more with less with a demo of Trucking Techs</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 sec-5-col-2">
              <form>
                <div className="row contact-form-row">
                  <div className="col-12 mb-3">
                    <input type="email" className="form-control" placeholder="E-mail*" />
                  </div>
                </div>
                <div className="row contact-form-row">
                  <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Job-Title*" />
                  </div>
                </div>
                <div className="row contact-form-row">
                  <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Mobile" />
                  </div>
                </div>
                <div className="row contact-form-row">
                  <div className="col-12 mb-3">
                    <select className="form-control">
                      <option value="" disabled selected>
                        Select Primary Business
                      </option>
                      <option value="finance">Finance</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="technology">Technology</option>
                      <option value="education">Education</option>
                      <option value="retail">Retail</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
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

      </section>
    </div>
  );
}

export default GetADemo;
