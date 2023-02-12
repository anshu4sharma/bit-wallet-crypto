import React, { useEffect } from "react";
import "./App.css";
import Welcome from "./screens/Welcome";
import { Routes, Route, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./screens/Home";
import { Toaster } from "react-hot-toast";
import { DBConfig } from "./utils/dbConfig";
import { initDB } from "react-indexed-db";
import { NETWORKS } from "./utils";
import Login from "./screens/Login";
import Send from "./screens/Send";
import Receive from "./screens/Receive";
import Setting from "./screens/Settings";
import Term from "./screens/Terms";
import About from "./screens/About";
import Privacy from "./screens/Privacy";
import { useDispatch } from "react-redux";
import { walletActions } from "./store/wallet/wallet-slice";
import { useIndexedDB } from "react-indexed-db";
import { STORENAME } from "./utils/dbConfig";
// import { CRYPTOJSSECRET } from "./utils";
import { AES } from "crypto-js";
import CryptoJS from "crypto-js";
initDB(DBConfig);
const App = () => {
  const dispatch = useDispatch();
  const { getByID } = useIndexedDB(STORENAME);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const isNetworkSet = window.localStorage.getItem("bit-current-network");
      if (!isNetworkSet) {
        window.localStorage.setItem(
          "bit-current-network",
          JSON.stringify(NETWORKS[0])
        );
        dispatch(walletActions.setCurrentNetwork(NETWORKS[0]));
        return;
      }
      dispatch(walletActions.setCurrentNetwork(JSON.parse(isNetworkSet)));
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getAccount = async () => {
      try {
        const wallet = await getByID(1);
        if (!wallet || !wallet.wallet) {
          navigate("/");
          return;
        }
        if (wallet && wallet.wallet && wallet.active === false) {
          navigate("/login");
          return;
        }

        const bytes = AES.decrypt(wallet.wallet, process.env.REACT_APP_CRYPTOJSSECRET);
        const originalWallet = bytes.toString(CryptoJS.enc.Utf8);
        dispatch(walletActions.setAccount(JSON.parse(originalWallet)));
      } catch (error) {
        console.log(error);
      }
    };

    getAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <div className=" bg-dark min-h-screen text-white">
      <Toaster />
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="send" element={<Send />} />
        <Route path="receive" element={<Receive />} />
        <Route path="setting" element={<Setting />} />
        <Route path="/term" element={<Term />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacypolicy" element={<Privacy />} />
      </Routes>
    </div>
  );
};

export default App;
