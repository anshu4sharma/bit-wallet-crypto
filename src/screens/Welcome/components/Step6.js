import { useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

const Step6 = ({ nextStep, prevStep, wallet }) => {
  const [show, setShow] = useState(false);
  // console.log(wallet);
  const clickHandler = () => {
    if (!show) {
      setShow(true);
    } else {
      nextStep();
    }
  };
  return (
    <div className="">
      {/* <button className="flex items-center" onClick={() => prevStep(2)}>
        <AiFillCaretLeft className="text-3xl text-primary" />
        <p className="ml-1 text-lg text font-bold"> Back</p>
      </button> */}
      <h2 className="max-w-[300px] text-white mt-6 text-5xl font-extrabold  leading-[3.5rem]">
        Backup phrase
      </h2>
      <p className="mt-10">
        Your secreat phrase helps you to backup and restore your BIT wallet
        account. Keep your seed phrase key confidential. Access of this key to
        any other person could give them access of this wallet.
      </p>
      <div className="py-6 px-4 bg-[#252424] mt-6 rounded-xl min-h-[150px] flex justify-center items-center">
        {show ? (
          <p className="text-center text-xl">{wallet.mnemonic.phrase}</p>
        ) : (
          <BiLockAlt className="text-primary text-4xl text-center mx-auto block" />
        )}
      </div>
      <button
        onClick={clickHandler}
        className={` ${"bg-primary"} py-3 px-10 mt-10  rounded-xl w-full`}
      >
        {show ? "Next" : ` Click here to reveal your seed phrase`}
      </button>
    </div>
  );
};

export default Step6;
