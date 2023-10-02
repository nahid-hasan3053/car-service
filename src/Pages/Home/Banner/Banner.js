import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import BannerItem from './BannerItem';

const bannerData = [
    {
        id: 1,
        image: img1,
        preview: 4,
        next: 2
    },
    {
        id: 2,
        image: img2,
        preview: 1,
        next: 3,
    },
    {
        id: 3,
        image: img3,
        preview: 2,
        next: 4
    },
    {
        id: 4,
        image: img4,
        preview: 3,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItem key={slide.id} slide={slide}></BannerItem>)
            }
        </div>
    );
};

export default Banner;