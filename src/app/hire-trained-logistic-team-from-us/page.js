import React from 'react';
import HeaderCommon from '../about-us/HeaderCommon';
import Image from 'next/image';

const Page = () => {
    const title = 'Hire Trained Logistic Team From Us';
    const img = require('/public/images/people team.jpg')
    return (
        <div>
            <HeaderCommon title={title}></HeaderCommon>
            <div className="container my-5">
                <section>
                    <div className="text-center mb-4 hire-trained-team-sec1">
                        <h1>Providing Skilled Professionals for Logistics and Transport Companies</h1>
                    
                    </div>
                </section>
                <section className=' hire-trained-team-sec2'>
                <div className="row">
                    <div className="col-lg-6 ">
                        <div className='sec-2-img'>
                        <Image src={img} height={1000} width={1000} alt='hire'></Image>
                        </div>
                    </div>
                    <div className="col-lg-6">
                         <p className='sec-2-p'>
                            At Trucking Techs, we understand the critical role that a skilled and efficient workforce plays in the logistics and transport industry.
                            Our mission is to provide you with highly trained professionals who are equipped to handle the complexities of your operations, ensuring seamless and effective management of your logistics needs.
                        </p>
                    </div>
                </div>
                </section>

                <section className='hire-trained-team-sec3'>
                    <h2 className="mb-3 text-center">We have Trained & Experienced Workforce</h2>
                    <ul className="list-group">
                        <li className="list-group-item">Logistics Coordinator</li>
                        <li className="list-group-item">Dispatch Manager</li>
                        <li className="list-group-item">Load Planner</li>
                        <li className="list-group-item">Transportation Specialist</li>
                        <li className="list-group-item">Supply Chain Analyst</li>
                        <li className="list-group-item">Freight Broker</li>
                        <li className="list-group-item">Logistics Analyst</li>
                        <li className="list-group-item">Customer Service Representative (Logistics)</li>
                        <li className="list-group-item">Import/Export Coordinator</li>
                        <li className="list-group-item">Inventory Control Specialist</li>
                        <li className="list-group-item">Accounts Receivable Specialist</li>
                        <li className="list-group-item">Accounts Payable Specialist</li>
                        <li className="list-group-item">Payroll Specialist</li>
                        <li className="list-group-item">Invoicing Clerk</li>
                        <li className="list-group-item">Accounting Assistant</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Page;
