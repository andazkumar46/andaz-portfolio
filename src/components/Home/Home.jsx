import React from 'react';
import avatarImg from "../../assets/profile.png";
import TextChanger from '../TextChanger';
import cvFile from "../../assets/Andaz_Kumar.pdf"; // Put your CV file in assets folder

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChanger />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          "To work in a challenging, innovative, and research-oriented environment, to accomplish my incessant desire to seek more knowledge and develop my skills in the field of computer science."
        </p>

        {/* Download CV Button */}
        <a href={cvFile} download="Andaz_Kumar.pdf">
          <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            DOWNLOAD CV
          </button>
        </a>
      </div>

      <div>
        <img src={avatarImg} alt="Profile Avatar" />
      </div>
    </div>
  );
};

export default Home;
