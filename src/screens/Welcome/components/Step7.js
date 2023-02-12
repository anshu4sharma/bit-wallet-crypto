import { ethers } from "ethers";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import { AiFillCaretLeft } from "react-icons/ai";
// import { BiLockAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Step7 = ({ nextStep, prevStep, wallet }) => {
  const [mnemonic, setMnemonic] = useState([]);
  const [inputMnemonic, setInputMnemonic] = useState([]);
  const [mnemonicLength, setMnemonicLength] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let mnemonic = wallet.mnemonic.phrase;
    let splited = mnemonic.split(" ");
    setMnemonic(shuffleArray(splited));
    setMnemonicLength(splited.length);
    setInputMnemonic([]);
  }, [wallet]);

  const pushText = (val) => {
    setInputMnemonic((prev) => [...prev, val]);
    setMnemonic((prev) => prev.filter((value) => value !== val));
  };
  const removeText = (val) => {
    setInputMnemonic((prev) => prev.filter((value) => value !== val));
    setMnemonic((prev) => [...prev, val]);
  };
  const shuffleArray = (array) => {
    const arrayCopy = [...array];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (2 ** 32 - 1) * (i + 1));
      [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
  };
  const submitHandler = () => {
    let inputString = inputMnemonic.join(" ");

    try {
      const wallet2 = ethers.Wallet.fromMnemonic(inputString);
      if (wallet2.address.toLowerCase() === wallet.address.toLowerCase()) {
        toast.success("Verification check successfull");
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid Input");
    }
  };
  return (
    <div className="">
      <h2 className="max-w-[300px] text-white mt-6 text-5xl font-extrabold  leading-[3.5rem]">
        Backup phrase
      </h2>
      <p className="mt-10">
        Your secreat phrase helps you to backup and restore your BIT wallet
        account. Keep your seed phrase key confidential. Access of this key to
        any other person could give them access of this wallet.
      </p>
      <p>{wallet.mnemonic.phrase}</p>
      <div className="py-6 px-4 bg-[#252424] mt-6 rounded-xl  grid grid-cols-4 gap-3">
        {inputMnemonic.length > 0 ? (
          <>
            {inputMnemonic.map((val, i) => (
              <button
                onClick={() => removeText(val)}
                className=" bg-[#151516] p-2 px-4 max-h-max"
                key={i}
              >
                {val}
              </button>
            ))}
          </>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {mnemonic.length > 0 ? (
          <div className="grid gap-4 grid-cols-4 mt-10">
            {mnemonic.map((val, i) => (
              <button
                onClick={() => pushText(val)}
                className=" bg-[#252424] p-2 px-4 "
                key={i}
              >
                {val}
              </button>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <button
        onClick={submitHandler}
        className={` ${inputMnemonic.length < mnemonicLength
          ? " bg-gray-500 pointer-events-none"
          : "bg-primary"
          } py-3 px-10 mt-10  rounded-xl w-full`}
      >
        {"Next"}
      </button>
    </div>
  );
};

export default Step7;
