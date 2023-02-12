import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiFillCaretLeft } from "react-icons/ai";
import Spinner from "react-svg-spinner";
import { useNavigate } from "react-router-dom";

import { ethers } from "ethers";
const Step4 = ({ nextStep, prevStep, setWallet, wallet }) => {
  const [privateKey, setPrivateKey] = useState("");
  const [phrase, setPhrase] = useState("");
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(!privateKey);
    if (+type === 0 && !privateKey) {
      toast.error("Invalid Input!");
      return;
    }
    if (+type === 1 && !phrase) {
      toast.error("Invalid Input!");
      return;
    }
    try {
      setLoading(true);
      let wallet = null;
      if (+type === 0) {
        wallet = new ethers.Wallet(privateKey);
      } else {
        wallet = ethers.Wallet.fromMnemonic(phrase);
      }
      console.log(wallet);
      setTimeout(() => {
        setWallet(wallet);
        setLoading(false);
        nextStep();
      }, 2000);
      // navigate("/home");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Invalid input");
    }
  };

  return (
    <div className="">
      <button className="flex items-center" onClick={() => prevStep()}>
        <AiFillCaretLeft className="text-3xl text-primary" />
        <p className="ml-1 text-lg text font-bold"> Back</p>
      </button>
      <h2 className="max-w-[300px] text-white mt-6 text-5xl font-extrabold  leading-[3.5rem] ">
        Import Account
      </h2>
      <div className="mt-10 flex  items-center">
        <label htmlFor="" className="text-xl font-bold text-400">
          Select Type
        </label>
        <select
          name=""
          id=""
          className="bg-transparent flex-1 ml-5 rounded-lg"
          onChange={(e) => setType(e.target.value)}
        >
          <option value={0} className="text-black">
            PrivateKey
          </option>
          <option value={1} className="text-black">
            Phrase
          </option>
        </select>
      </div>
      {Number(type) === 0 ? (
        <div className="mt-10">
          <label htmlFor="" className="block text-400">
            PrivateKey
          </label>
          <input
            type="text"
            className="bg-transparent w-full mt-2 rounded-xl border-2 border-[#232424] py-3 focus:border-primary"
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
          />
        </div>
      ) : (
        <div className="mt-10">
          <label htmlFor="" className="block text-400">
            Phrase
          </label>
          <input
            type="text"
            className="bg-transparent w-full mt-2 rounded-xl border-2 border-[#232424] py-3 focus:border-primary"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />
        </div>
      )}

      <button
        onClick={handleSubmit}
        className={` ${
          loading ? "bg-gray-500 pointer-events-none" : "bg-primary"
        } py-3 px-10 mt-10  rounded-xl`}
      >
        {loading ? <Spinner color={"white"} size="20px" /> : " Import"}
      </button>
    </div>
  );
};

export default Step4;
