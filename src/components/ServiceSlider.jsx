import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import icon1 from '../services-icons/1.svg'
import icon2 from '../services-icons/2.svg'
import icon4 from '../services-icons/4.svg'
import icon5 from '../services-icons/5.svg'
import icon6 from '../services-icons/6.svg'
import icon7 from '../services-icons/7.svg'
import icon8 from '../services-icons/8.svg'
import icon9 from '../services-icons/9.svg'


const services = [
  {
    id:1,
    image: icon1,
    name: "Pet Boarding, Foster & Kennel",
    description:
      "Our pet boarding services offer a home away from home for your furry family members. With spacious accommodations, personalized care plans, and a dedicated team of animal enthusiasts, your pets are in safe and loving hands",
    btnText: "Explore",
  },
  {
    id:2,
    image: icon2,
    name: "Training & Behavioral Workshops",
    description:
      "Our training workshops offer a transformative experience for pets and their owners alike. Led by experienced trainers, these workshops provide valuable skills to enhance your pet's behavior, obedience, and communication. Our behavioral workshops delve into the psychology of pets, addressing common challenges and concerns.",
    btnText: "Explore",
  },
  {
    id:3,
    image: icon9,
    name: "Pet-Friendly Cafe",
    description:
      "Step into a haven where two worlds merge – the warmth of a cafe experience and the joy of sharing it with your furry companion. Our pet-friendly cafe welcomes both humans and pets to indulge in a delightful blend of flavors and friendship.",
    btnText: "Explore",
  },
  {
    id:4,
    image: icon4,
    name: "Pet Store",
    description:
      "Discover a world of tail wags, purrs, and playful adventures at our pet store. With a wide array of carefully curated products, we're your one-stop destination for all things pet-related. From premium nutrition and stylish accessories to interactive toys and cozy beds, our store is designed to cater to the diverse needs and preferences of your beloved companions.",
    btnText: "Explore",
  },
  {
    id:5,
    image: icon5,
    name: "Grooming facility",
    description:
      "Indulge your furry friend in a spa-like experience with our pampering pet grooming services. Our dedicated grooming facility is a haven where pets are treated to a blend of relaxation, rejuvenation, and style. From soothing baths to stylish trims, our skilled groomers ensure your pet looks and feels their best, all while enjoying a stress-free and comfortable atmosphere.",
    btnText: "Explore",
  },
  {
    id:6,
    image: icon6,
    name: "Pet-Friendly Swimming Pool",
    description:
      "Dive into a world of aquatic fun and frolic designed exclusively for your furry companions. Our pet-friendly swimming pool is a haven where dogs can make a splash, paddle, and play to their heart's content.",
    btnText: "Explore",
  },
  {
    id:7,
    image: icon7,
    name: "Pet Taxi for drop & pickup",
    description:
      "Navigate the world of pet transportation with ease through our reliable and caring pet taxi services. Whether it's a vet appointment, a grooming session, or a playdate, our pet taxi ensures your furry friend arrives safely and stress-free at their destination.",
    btnText: "Explore",
  },
  {
    id:8,
    image: icon8,
    name: "Vet on call facility",
    description:
      "Ensure your pet's health is just a call away with our convenient vet-on-call facility. Our team of experienced veterinarians is ready to provide expert guidance and assistance whenever you need it. Whether you have questions about your pet's health, need advice on care, or are facing an urgent situation, our vet-on-call services offer peace of mind and reliable support.",
    btnText: "Explore",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={80}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      className="custom-swiper serviceSlider min-h-[680px] h-[35rem] overflow-y-auto"
    >
      {services.map((service) => {
        return (
            <SwiperSlide
              className="border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8" key={service.id}>
              <div className=" bg-yellow rounded-full w-1/4"><img className="mb-9 w-full p-5" src={service.image} /></div>
              <div className="text-[26px] font-[Arial] font-bold mb-4">{service.name}</div>
              <div className="text-[16px] font-[Arial]">{service.description}</div>
            </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
