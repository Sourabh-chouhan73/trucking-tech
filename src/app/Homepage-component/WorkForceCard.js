'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const WorkForceCard = () => {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });

    return (
        <>
            <section className='section-2 pb-5'>
                <div className="container">
                    <div className='sec-2-head '>
                        <h1 className='text-center'>We are a reliable software company with a skilled and dedicated workforce.</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 sec-2-col">
                            <div ref={ref1} className={`card sec-2-card mt-2 ${inView1 ? 'animate__animated animate__fadeInLeft' : ''}`}>
                                <div className="card-body">
                                    <div>
                                        <h3 className='text-center about-title'>Dispatch Management Software</h3>
                                    </div>
                                    <div className='card-2-content'>
                                        <ul>
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
                        <div className="col-lg-6 col-md-12 col-sm-12 sec-2-col">
                            <div ref={ref2} className={`card sec-2-card mt-2 ${inView2 ? 'animate__animated animate__fadeInRight' : ''}`}>
                                <div className="card-body">
                                    <div>
                                        <h3 className='text-center about-title'>Workforce Management Solution</h3>
                                    </div>
                                    <div className='card-2-content'>
                                        <ul>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WorkForceCard;
