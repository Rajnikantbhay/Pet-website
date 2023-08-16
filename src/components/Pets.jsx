import React, { useState } from "react";
import petbg from '../img/pets/pets-bg.png'
import Pet1Img from '../../src/img/pets/1.png';
import Pet2Img from '../../src/img/pets/2.png';
import Pet3Img from '../../src/img/pets/3.png';
import Pet4Img from '../../src/img/pets/4.png';
import Pet5Img from '../../src/img/pets/5.png';
import Pet6Img from '../../src/img/pets/6.png';
import Pet7Img from '../../src/img/pets/7.png';
import Pet8Img from '../../src/img/pets/8.png';
import Pet9Img from '../../src/img/pets/9.png';
import Pet10Img from '../../src/img/pets/10.png';
import Pet11Img from '../../src/img/pets/11.png';
import Pet12Img from '../../src/img/pets/12.png';


import Badge from "../../src/img/pets/badge.svg";

const pets = [
  {
    id: 1,
    category: "cat",
    name: "kyba",
    image: Pet1Img,
  },
  {
    id: 2,
    category: "bird",
    name: "rotty",
    image: Pet2Img,
  },
  {
    id: 3,
    category: "fox",
    name: "fexxie",
    image: Pet3Img,
  },
  {
    id: 4,
    category: "cat",
    name: "kirra",
    image: Pet4Img,
  },
  {
    id: 5,
    category: "hamster",
    name: "dinno",
    image: Pet5Img,
  },
  {
    id: 6,
    category: "parrot",
    name: "paco",
    image: Pet6Img,
  },
  {
    id: 7,
    category: "parrot",
    name: "pavo",
    image: Pet7Img,
  },
  {
    id: 8,
    category: "cat",
    name: "ynna",
    image: Pet8Img,
  },
  {
    id: 9,
    category: "lion",
    name: "hero",
    image: Pet9Img,
  },
  {
    id: 10,
    category: "bird",
    name: "dimmy",
    image: Pet10Img,
  },
  {
    id: 11,
    category: "dog",
    name: "jasper",
    image: Pet11Img,
  },
  {
    id: 12,
    category: "hamster",
    name: "syu",
    image: Pet12Img,
  },
];

const Pets = () => {
  const [petDetails, setPetDetails] = useState(pets[10]);
  const [petIndex, setPetIndex] = useState(10);

  const getPetDetails = (id) => {
    const pet = pets.find((pet) => {
      return pet.id === id;
    });
    setPetDetails(pet);
  };
  return (
    <section className="bg-center py-6 overflow-hidden" style={{ backgroundImage: `url(${petbg})` }}>
      <div className="flex felx-col lg:flex-row">
        {/* badge */}
        <div className="hidden xl:flex xl:w-[30%] xl:pl-[160px]">
          <img src={Badge} width={230} height={227} alt="" />
        </div>
        {/* pets */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* pet detail */}
          <div className="lg:w-[30%] flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto lg:mx-0">
            <div className="text-center text-white">
              {/* category */}
              <div className="text-[32px] capitalize">
                {petDetails.category}
              </div>
              {/* name */}
              <div className="uppercase text-[17px] mb-1">
                ({petDetails.name})
              </div>
              {/* image */}
              <div className="w-[150px] h-[150px] mx-auto lg:mx-0 border-4 border-white rounded-full">
                <img src={petDetails.image} width={150} height={150} alt="" />
              </div>
            </div>
          </div>
          {/* pet list */}
          <div className="relative lg:w-[60%] flex-1 flex flex-wrap items-center">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end lg:-mr-6">
              {pets.map((pet, index) => {
                return (
                  <div
                    onClick={() => {
                      getPetDetails(pet.id);
                      setPetIndex(index);
                    }}
                    className="cursor-pointer relative"
                    key={index}
                  >
                    {/* overlay */}
                    <div
                      className={`w-full h-full absolute rounded-full ${
                        petIndex === index
                          ? "border-2 border-white"
                          : "bg-black/40"
                      }`}
                    ></div>
                    <img
                      src={pet.image}
                      width={95}
                      height={95}
                      alt=""
                      draggable="false"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pets;
