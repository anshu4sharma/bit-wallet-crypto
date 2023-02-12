/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../components/Header";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { useSelector } from "react-redux";
const Settings = () => {
  const { account } = useSelector((state) => state.wallet);
  const [step, setStep] = useState(0);
  const [privateKey, setPrivateKey] = useState(null);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="relative container py-10 ">
      <Header account={account} />

      {step === 0 ? (
        <>
          <Step1 account={account} nextStep={nextStep} prevStep={prevStep} />
        </>
      ) : step === 1 ? (
        <>
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            setPrivateKey={setPrivateKey}
          />
        </>
      ) : (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          setPrivateKey={setPrivateKey}
          privateKey={privateKey}
        />
      )}
    </div>
  );
};

export default Settings;
