'use client';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const WorkForce = () => {
    const img1 = require('../images/2151541930.jpg');

    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });

    return (
        <div>
            <section className='section-10'>
                <div className="container">
                    <div className="row">
                        <div ref={ref1} className={`col-lg-6 ${inView1 ? 'animate__animated animate__fadeInLeft' : ''}`}>
                            <Image className='workforce-img' src={img1} height={400} width={550} alt="Dispatch Management Software"></Image>
                        </div>
                        <div ref={ref2} className={`col-lg-6 ${inView2 ? 'animate__animated animate__fadeInRight' : ''}`}>
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
                        <div ref={ref3} className={`col-lg-6 ${inView3 ? 'animate__animated animate__fadeInLeft' : ''}`}>
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
                        <div ref={ref4} className={`col-lg-6 ${inView4 ? 'animate__animated animate__fadeInRight' : ''}`}>
                            <Image className='workforce-img' src={img1} height={400} width={550} alt="Workforce Management Solution"></Image>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WorkForce;
