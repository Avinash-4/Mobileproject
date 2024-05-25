// import img2 from '../../../images/features/feature-02.jpg';
// import img3 from '../../../images/features/feature-01.jpg';
// import img4 from '../../../images/features/feature-05.jpg';
// import img5 from '../../../images/features/feature-06.jpg';
// import img from '../../../images/features/feature.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const AvailableFeaturesContent = () => {
    const availabeServiceArray = [
        { title: 'ICU', img: 'https://i.pinimg.com/736x/ac/fa/5a/acfa5a7910669e8f24220da37779b6db.jpg' },
        { title: 'Chamber', img: 'https://i.pinimg.com/736x/ac/fa/5a/acfa5a7910669e8f24220da37779b6db.jpg' },
        { title: 'Patient Ward', img: 'https://i.pinimg.com/736x/ac/fa/5a/acfa5a7910669e8f24220da37779b6db.jpg' },
        { title: 'Test Room', img: 'https://i.pinimg.com/736x/ac/fa/5a/acfa5a7910669e8f24220da37779b6db.jpg' },
        { title: 'Laboratory', img: 'https://i.pinimg.com/736x/ac/fa/5a/acfa5a7910669e8f24220da37779b6db.jpg' },
    ]
    return (
        <div className="d-flex justify-content-center align-items-center gap-4">

            <Swiper
                spaceBetween={2}
                slidesPerView={4}
                modules={[Navigation, Autoplay]}
                loop={true}
                centeredSlides={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
                {
                    availabeServiceArray.map((item) => (
                        <SwiperSlide key={item.title} className='my-2'>
                            <div className="feature-item text-center">
                                <img src={item.img} className="img-fluid" alt="" />
                                <p>{item.title}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default AvailableFeaturesContent