'use client';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import SimpleSlider from './SimpleSlider';

const WorkForce = () => {

    const img1 = require('../images/2151541930.jpg');
    const DispatchManagementSoftwareImgs=[{id:'1', img:'/images/45dfa93b-a646-4ffa-bee1-6d3efd639adf.png'},{ id:'2',img:'/images/daa.png'}];
    const WorkforceManagementSolutionImgs=[{id:'1',img:'/images/people team.jpg'},{id:'2' ,img:'/images/Sprinklr_-Gurgaon-office_image-1.png'}];

    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });

    return (
        <div>
            <section className='section-10'>
                <div className="container">
                    <div className="row">
                        <div ref={ref1} className={`col-lg-6 d-flex justify-content-center py-3  workforce-col-1 ${inView1 ? 'animate__animated animate__fadeInLeft' : ''}`}>
                            <SimpleSlider DispatchManagementSoftwareImgs={DispatchManagementSoftwareImgs}></SimpleSlider>                            
                        </div>
                        <div ref={ref2} className={`col-lg-6 d-flex justify-content-center py-3 ${inView2 ? 'animate__animated animate__fadeInRight' : ''}`}>
                            <div className='workforce-card'>
                                <h3 className='sec-10-title'>Dispatch Management Software</h3>
                                <ul className='sec-10-ul'>
                                    <li>Order Management</li>
                                    <li>Dispatch Scheduling</li>
                                    <li>Fleet Management</li>
                                    <li>GPS Tracking</li>
                                    <li>Communication Tools</li>
                                    <li>Customer Management</li>
                                    <li>Billing and Invoicing</li>
                                    <li>Accounting</li>
                                    <li>Payroll</li>
                                    <li>Compliance and Safety</li>
                                    <li>Reporting and Analytics</li>
                                    <li>Integration Capabilities with Third Party</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-10'>
                <div className="container">
                    <div className="row">
                        <div ref={ref3} className={`col-lg-6 d-flex justify-content-center py-3 ${inView3 ? 'animate__animated animate__fadeInLeft' : ''}`}>
                            <div className='workforce-card'>
                                <h3 className='sec-10-title'>Workforce Management Solution</h3>
                                <ul className='sec-10-ul'>
                                    <li>Logistic Coordinator</li>
                                    <li>Dispatch Management</li>
                                    <li>Load Planner</li>
                                    <li>Transportation Specialist</li>
                                    <li>Supply Chain Analyst</li>
                                    <li>Customer Service Representative</li>
                                    <li>Import/Export Coordinator</li>
                                    <li>Inventory Control Specialist</li>
                                    <li>Account Receivable Specialist</li>
                                    <li>Account Payable Specialist</li>
                                    <li>Payroll Specialist</li>
                                    <li>Invoicing Clerk</li>
                                    <li>Accounting Assistant</li>
                                </ul>
                            </div>
                        </div>
                        <div ref={ref4} className={`col-lg-6 d-flex justify-content-center py-3  workforce-col-2 ${inView4 ? 'animate__animated animate__fadeInRight' : ''}`}>
                            <SimpleSlider  DispatchManagementSoftwareImgs={WorkforceManagementSolutionImgs}></SimpleSlider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WorkForce;
