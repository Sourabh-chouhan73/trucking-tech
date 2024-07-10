import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import HeaderCommon from './HeaderCommon';

const Page = () => {
  const title = 'About Trucking Techs';
  return (
    <div>
      <HeaderCommon title={title}></HeaderCommon>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="mt-4 text-center">Trucking Techs is your trusted partner in revolutionizing transportation management. We provide cloud-based transportation management solutions that cater to fleets, brokers, and 3PLs. Our platform, powered by Transport Pro, is designed to be the central hub for all your business operations, streamlining processes from dispatch to accounting.</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1 className="text-center mb-5 about-title">Our Services</h1>
              <ol>
                <li className="mb-2"><b>Transportation Management System (TMS) Implementation and Support:</b></li>
                <ul>
                  <li>Full Lifecycle Automation: From dispatch to billing, settlements, and reporting, we help automate every step, eliminating manual processes.</li>
                  <li>Modern Capacity and Tracking Solutions: Advanced tools for brokerages to manage capacity and track loads effectively.</li>
                  <li>Driver Management: Proactive tools to oversee driver performance, safety, and maintenance.</li>
                  <li>Multi-Location Implementation: Seamlessly integrate and manage operations across multiple locations.</li>
                </ul>
                <li className="my-2"><b>Remote Workforce Provision:</b></li>
                <ul>
                  <li>We offer skilled professionals to handle all TMS-related tasks remotely, ensuring smooth operations without the need for in-house staff.</li>
                  <li>Our team is trained to manage dispatch, imaging, billing, settlements, accounting, and reporting efficiently.</li>
                </ul>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container my-5">
          <h1 className="text-center mb-5 about-title">Why Choose Trucking Techs?</h1>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Cutting-Edge Technology</h5>
                  <p className="card-text">
                    We leverage the latest advancements in Transportation Management Systems (TMS) to provide you with the best tools and solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Scalability</h5>
                  <p className="card-text">
                    Our services are designed to grow with your business, ensuring you can scale operations seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Focus on Growth</h5>
                  <p className="card-text">
                    By automating manual processes, your team can concentrate on business growth and building customer relationships.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Proactive Management</h5>
                  <p className="card-text">
                    With powerful built-in tools, manage your fleet, safety, and maintenance proactively.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-center mb-5 about-title">Our Trained Team</h2>

          <div className="row mb-4">
            <div className="col-md-3">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Dispatch Management</h5>
                  <p className="card-text">
                    Our team is skilled in dispatch management.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Imaging and Document Processing</h5>
                  <p className="card-text">
                    Our team is skilled in imaging and document processing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Accounting and Financial Reporting</h5>
                  <p className="card-text">
                    Our team is skilled in accounting and financial reporting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Billing and Settlements</h5>
                  <p className="card-text">
                    Our team is skilled in billing and settlements.
                  </p>
                </div>
              </div>
            </div>
           
          </div>

          <h2 className="text-center mb-5 about-title">Partner with Trucking Techs</h2>

          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    Trucking Techs is dedicated to helping transportation companies thrive by providing the technology and workforce needed to streamline operations and drive growth. Partner with us to take your transportation management to the next level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
