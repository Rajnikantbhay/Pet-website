import img1 from '../../src/rev-img/5-real-square.jpg'
import img2 from '../../src/rev-img/2.jpg'
import img3 from '../../src/rev-img/3.webp'
import img4 from '../../src/rev-img/4-real.webp'
import img5 from '../../src/rev-img/1-real.webp'
import img6 from '../../src/rev-img/6.webp'
import img7 from '../../src/rev-img/7.webp'
import img8 from '../../src/rev-img/8.webp'
import img9 from '../../src/rev-img/9.webp'
import img10 from '../../src/rev-img/10.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Fragment } from 'react'

const Review = [
    {
     id: 1,
     img: img1,
     description:"Amazing place for your Furry friends. They will enjoy the place to the fullest.Swimming pool is really an add on. Experienced owner and staff. They know how to deal with your pets. One of the best boarding place in Gurgaon. Highly impressed with the facilities"   
    },
    {
     id: 2,
     img: img2,
     description:"It was amazing. Used to get daily updates as well and got to know some qualities of my dog. As there were other dogs, it helped my dog to get a friendly environment."   
    },
    {
     id: 3,
     img: img3,
     description:"Excellent place for your pets. There's plenty of space for big dogs to run about and romp, as well as a nice park part for tiny dogs. For thirsty dogs, there are plenty of water bowls."   
    },
    {
     id: 4,
     img: img4,
     description:"Loved the event!! It was so creative and fun.. Casper and Oreo both loved it!! We would want you guys to host more such events😊 …"   
    },
    {
     id: 5,
     img: img5,
     description:"Great work, Barking Lot Pet Resort, in giving space for our four-legged children to romp around!perfect park section for all types of dogs."   
    },
    {
     id: 6,
     img: img6,
     description:"One of the best pet resorts I’ve seen. Their cage free policy is great and my dog Jack had a great time there. No anger issues or anything with Jack. Perfect! Owner takes care of all dogs just like they’re his own. Would definitely leave Jack again here. 💯 …"   
    },
    {
     id: 7,
     img: img7,
     description:"Amazing place for your Furry friends. They will enjoy the place to the fullest.Swimming pool is really an add on. Experienced owner and staff. They know how to deal with your pets. One of the best boarding place in Gurgaon. Highly impressed with the facilities"   
    },
    {
     id: 8,
     img: img8,
     description:"My experience with barking lot was stress free ,they provided a playful environment for my pet cage free and regular updates. Will definitely recommend Barking Lot to all pet parents. Thank you Neetanshu and barking lot taking care of fluffy while we were on vacation"   
    },
    {
     id: 9,
     img: img9,
     description:"Spacious place and friendly environment for dogs. My dog enjoyed his stay. Staff shared videos regularly which is the plus point."   
    },
    {
     id: 10,
     img: img10,
     description:"I love it and am sure my pet also loves it. Love the way Neetanshu takes responsibility of yr child. We had problems getting him accepted at other Pet resorts but Neetanshu just got familiarised with him in minutes and he has been comfortable. He has been at the Barking Lot resort twice. Ample space, greenery for your pet to enjoy" 
    },
]

const ReviewSlider = () => {
    return (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="serviceSlider custom-swiper min-h-[740px] h-[35rem] overflow-y-auto"
        >
          {Review.map((rev) => {
            return (
              <Fragment key={rev.id}>
                <SwiperSlide
                  className="border smmx border-primary/20 bg-cream min-h-[560px] py-16 px-8 rounded-[66px] mxauto"
                  key={rev.id}
                >
                <div className='w-72 mb-4 h-1/2 mxauto'><img className="h-full  rounded-full mxauto" src={rev.img} /></div>
                <hr className='border w-full border-black'/>
                  <div className="text-[16px] mb-4 mt-4 font-[Arial]">{rev.description}</div>
                </SwiperSlide>
              </Fragment>
            );
          })}
        </Swiper>
      );
}

export default ReviewSlider