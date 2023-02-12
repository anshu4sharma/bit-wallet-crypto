import React from "react";
import Logo from "../../../assets/Logo.png";
import { BsArrowRightShort } from "react-icons/bs";
const Step1 = ({ nextStep }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div>
        <img src={Logo} alt="" className="w-[200px]" />
        <button
          onClick={() => nextStep()}
          className="bg-primary text-lg rounded-lg px-8 py-2 grid grid-flow-col gap-3 mt-8 justify-center items-center"
        >
          <p>Click to start</p>
          <div className="w-5 h-5 rounded-full bg-white text-dark grid place-content-center text-xl">
            <BsArrowRightShort />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Step1;
