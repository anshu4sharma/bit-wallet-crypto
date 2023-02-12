import React, { useEffect, useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import { useNavigate } from "react-router-dom";
// import { CRYPTOJSSECRET } from "../../utils";
// import { AES } from "crypto-js";
import { useIndexedDB } from "react-indexed-db";
import { STORENAME } from "../../utils/dbConfig";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import Step7 from "./components/Step7";
// import CryptoJS from "crypto-js";
const Welcome = () => {
  const [steps, setSteps] = useState(0);
  const [wallet, setWallet] = useState(null);
  const navigate = useNavigate();
  const { getByID, deleteRecord } = useIndexedDB(STORENAME);

  useEffect(() => {
    const getAccount = async () => {
      try {
        const wallet = await getByID(1);
        if (wallet && !wallet.wallet) {
          try {
            const res = await deleteRecord(1);
            console.log(res);
          } catch (error) {
            console.log(error);
          }
        }

        if (wallet && wallet.wallet) {
          navigate("/home");
          return;
        }
        if (wallet && wallet.wallet && wallet.active === false) {
          navigate("/login");
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);
  const nextStep = (step = null) => {
    console.log(step);
    setSteps((prev) => (step !== null || undefined ? step : prev + 1));
  };
  const prevStep = (step = null) => {
    setSteps((prev) => (step !== null || undefined ? step : prev - 1));
  };

  return (
    <div className="container py-10 ">
      {steps === 0 ? (
        <Step1 nextStep={nextStep} />
      ) : steps === 1 ? (
        <Step2 nextStep={nextStep} />
      ) : steps === 2 ? (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          setWallet={setWallet}
          wallet={wallet}
        />
      ) : steps === 3 ? (
        <Step4
          nextStep={nextStep}
          prevStep={prevStep}
          setWallet={setWallet}
          wallet={wallet}
        />
      ) : steps === 4 ? (
        <Step5 nextStep={nextStep} prevStep={prevStep} wallet={wallet} />
      ) : steps === 5 ? (
        <Step6 nextStep={nextStep} prevStep={prevStep} wallet={wallet} />
      ) : (
        <Step7 nextStep={nextStep} prevStep={prevStep} wallet={wallet} />
      )}
    </div>
  );
};

export default Welcome;
