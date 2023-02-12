import React, { useState } from "react";
import toast from "react-hot-toast";
import { useIndexedDB } from "react-indexed-db";
import { STORENAME } from "../../../utils/dbConfig";
import { ethers } from "ethers";

const Step2 = ({ nextStep, prevStep, setPrivateKey }) => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { getByID } = useIndexedDB(STORENAME);

  const handleSubmit = async () => {
    if (!password) {
      toast.error("Invalid password");
      return;
    }

    setLoading(true);
    try {
      const wallet = await getByID(1);

      if (!wallet.jsonwallet) {
        setLoading(false);
        toast.error("something went wrong");
        return;
      }
      try {
        const decrypted = ethers.Wallet.fromEncryptedJsonSync(
          wallet.jsonwallet,
          password
        );
        // console.log(decrypted);
        setLoading(false);
        setPrivateKey(decrypted.privateKey);
        nextStep();
      } catch (error) {
        console.log(error);
        toast.error("Invalid password");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
      setLoading(false);
    }
  };
  return (
    <>
      <>
        <div className="mt-20">
          <h2 className="max-w-[300px] text-white  text-5xl font-extrabold  leading-[3.5rem] ">
            Show Private Keys
          </h2>
          <div className="mt-10">
            <label htmlFor="" className="block text-white">
              Type your password
            </label>
            <input
              type="password"
              className="bg-[#1F1F20] w-full  rounded-xl py-3 px-4 border-none focus:border-none focus:ring-0  text-xl  font-bold  mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="bg-red-500 bg-opacity-10 border border-red-500 border-opacity-25 mt-6 text-sm p-2 rounded-lg text-red-400">
            Warning: Never disclose this key. Anyone with your private keys can
            steal any assets held in your account.
          </div>
          <button
            onClick={handleSubmit}
            className={` ${
              loading ? "bg-gray-500 pointer-events-none" : "bg-primary"
            } py-3 px-10 mt-10  rounded-xl flex justify-center w-full `}
          >
            {loading ? "Please wait..." : " Submit"}
          </button>
        </div>
      </>
    </>
  );
};

export default Step2;
