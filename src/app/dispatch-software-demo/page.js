import React from 'react';
import Testimonials from './Testimonials';
import HeaderCommon from '../about-us/HeaderCommon';
const Page = () => {
    const title ='Dispatch Software Demo';
    return (
        <div>
            <HeaderCommon title={title}></HeaderCommon>
            <section className="section-11">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 sec-11-col-1">
                            <div className='demo-left-con'>
                                <h1>Trucking Techs</h1>
                                <h3 >Complete the form to get a quick demo.</h3>
                                <div className='d-flex'>
                                    <div><i class="fa fa-sign-in demo-icon"></i></div>
                                    <div className='demo-txt'>
                                        <p>Manage your entire operation in one place with one login</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div><i class="fa fa-cogs demo-icon"></i></div>
                                    <div className='demo-txt'>
                                        <p>Reduce repetitive tasks, eliminate manual entry</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div><i class="fa fa-sitemap demo-icon"></i></div>
                                    <div className='demo-txt'>
                                        <p>Enjoy easy-to-use, efficient workflows</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div><i class="fa fa-signal demo-icon"></i></div>
                                    <div className='demo-txt'>
                                        <p>Learn the system quickly and easily</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 sec-11-col-2">
                            <div className="card soft-demo-card">
                                <div className="card-bady">
                                    <h4 className='text-center demo-title'>Training & set-up included. No long-term contracts required.</h4>
                                <form>
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <select className="form-control demo-inp">
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
                                    <div className="col-6 mb-3">
                                        <select className="form-control demo-inp">
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
                                        <input type="text" className="form-control demo-inp" placeholder="Company name*" />
                                    </div>
                                </div>
                                <div className="row contact-form-row">
                                    <div className="col-6 mb-3">
                                        <input type="text" className="form-control demo-inp" placeholder="First name*" />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input type="text" className="form-control demo-inp" placeholder="Last name*" />
                                    </div>
                                </div>
                                <div className="row contact-form-row">
                                    <div className="col-6 mb-3">
                                        <input type="text" className="form-control demo-inp" placeholder="Phone number*" />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input type="email" className="form-control demo-inp" placeholder="Business Email*" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <button className='btn btn-primary w-100 demo-inp'>Submit</button>
                                    </div>
                                </div>
                            </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Testimonials></Testimonials>
        </div>
    );
}

export default Page;
