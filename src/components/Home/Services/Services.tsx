import React from 'react';
import './Services.css';
// import img from '../../../images/doc/doc1.jpg'
// import img2 from '../../../images/doc/doc4.jpg'
// import img3 from '../../../images/doc/doctor 5.jpg'
import { Link } from '@mui/material';
// import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <section className="container" style={{marginTop: 200, marginBottom:200}}>
            <div className='mb-5 section-title text-center'>
                <h2>Services</h2>
                <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img">
                            <img src='https://t3.ftcdn.net/jpg/05/08/17/96/360_F_508179650_d6Wnem0e2H83h9CXfvlXKs7Dr9GGAzjh.jpg' alt="" className="img-fluid" />
                            <img src='https://t3.ftcdn.net/jpg/05/08/17/96/360_F_508179650_d6Wnem0e2H83h9CXfvlXKs7Dr9GGAzjh.jpg' alt="" className="img-fluid mt-4" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img mt-4 mt-lg-0">
                            <img src='https://t3.ftcdn.net/jpg/05/08/17/96/360_F_508179650_d6Wnem0e2H83h9CXfvlXKs7Dr9GGAzjh.jpg' alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-content ps-4 mt-4 mt-lg-0">
                            <h2>Personal care <br />healthy living</h2>
                            <p className="mt-4 mb-5 text-secondary form-text">We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service