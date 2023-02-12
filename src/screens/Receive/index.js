import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import QRCode from "react-qr-code";
const Receive = () => {
  const { account } = useSelector((state) => state.wallet);

  return (
    <div className="relative container py-10 ">
      <Header />
      <div className="bg-dark-400 rounded-lg p-3 max-w-max mx-auto mt-10">
        <QRCode
          value={account?.address ? account.address : "dummy"}
          size={250}
        />
      </div>
      <p className="text-center mt-5 text-xl">Please scan this to send Matic</p>
    </div>
  );
};

export default Receive;
