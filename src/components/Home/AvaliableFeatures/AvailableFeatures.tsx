import React from 'react';
// import img from '../../../images/features/feature.png';
import './AvailableFeatures.css';
import AvailableFeaturesContent from './AvailableFeaturesContent';

const AvailabeFeatures = () => {

	return (
		<section className="container section-features">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-5 features-img">
						<img src='https://www.creativefabrica.com/wp-content/uploads/2023/10/06/Mobile-phone-repair-vector-logo-design-Graphics-80973422-2-580x387.jpg' className="img-fluid" alt="" />
					</div>
					<div className="col-md-7">
						<div className='mb-4 section-title text-center'>
							<h2 className='text-uppercase'>Availabe Service</h2>
							{/* <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing.</p> */}
						</div>
						<AvailableFeaturesContent/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AvailabeFeatures;