import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { createAccount2 } from "../../../web3";

const Step3 = ({ nextStep, prevStep, setWallet }) => {
  const createWallet = async () => {
    try {
      const wallet = await createAccount2();
      if (wallet) {
        setWallet(wallet);
        nextStep(4);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <button className="flex items-center" onClick={() => prevStep()}>
        <AiFillCaretLeft className="text-3xl text-primary" />
        <p className="ml-1 text-lg text font-bold"> Back</p>
      </button>
      <h2 className="max-w-[300px] text mt-6 text-5xl font-extrabold  leading-[3.5rem]">
        Let’s get started..
      </h2>
      <div className="border-2 mt-10 border-[#232424] p-4 py-6 rounded-xl">
        <p className="max-w-[250px] mx-auto text-center text-white">
          If you have not created wallet before, you can choose below option
        </p>
        <button
          onClick={createWallet}
          className="py-2.5 mt-4 px-14 bg-primary rounded-xl block mx-auto"
        >
          Create A Wallet
        </button>
      </div>
      <div className="border-2 mt-10 border-[#232424] p-4 py-6 rounded-xl">
        <p className="max-w-[250px] mx-auto text-center text-white">
          If you have created wallet before, you can choose below option
        </p>
        <button
          onClick={() => nextStep()}
          className="py-2.5 mt-4 px-14 bg-primary rounded-xl block mx-auto"
        >
          Import Wallet
        </button>
      </div>
      <p className="text-400 text-center mt-10">Terms & Condition</p>
    </div>
  );
};

export default Step3;
