import React from "react";

// import { copyToClipBoard } from "../../../utils";
import { useNavigate } from "react-router-dom";
import Clipboard from "react-clipboard.js";
import toast from "react-hot-toast";

const Step3 = ({ nextStep, prevStep, setPrivateKey, privateKey }) => {
  //   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <>
        <div className="mt-20">
          <h2 className="max-w-[300px] text-white  text-5xl font-extrabold  leading-[3.5rem] ">
            Show Private Keys
          </h2>
          <div className="mt-10">
            <label htmlFor="" className="block text-white">
              This is your Private Key (Click To Copy)
            </label>

            <Clipboard
              data-clipboard-text={privateKey}
              onSuccess={() => toast.success("Copied to clipboard")}
            >
              <button
                className="bg-[#1F1F20] block w-full text-red-400 rounded-xl py-3 px-4 mt-2 break-all
             break-words
            "
              >
                {privateKey}
              </button>
            </Clipboard>
          </div>
          <div className="bg-red-500 bg-opacity-10 border border-red-500 border-opacity-25 mt-6 text-sm p-2 rounded-lg text-red-400">
            Warning: Never disclose this key. Anyone with your private keys can
            steal any assets held in your account.
          </div>
          <button
            onClick={() => {
              navigate("/home");
            }}
            className={` ${"bg-primary"} py-3 px-10 mt-10  rounded-xl flex justify-center w-full `}
          >
            Done
          </button>
        </div>
      </>
    </>
  );
};

export default Step3;
