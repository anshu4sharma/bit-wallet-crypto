import React, { useEffect, useState } from "react";
import { useIndexedDB } from "react-indexed-db";
import { STORENAME } from "../../utils/dbConfig";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const { getByID, update } = useIndexedDB(STORENAME);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
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
        if (decrypted._isSigner) {
          const res = await update({ ...wallet, active: true });
          console.log(res);
          toast.success("Logged in successfully");
          setLoading(false);
          //   setTimeOut
          navigate("/home");
        }
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

  useEffect(() => {
    const getAccount = async () => {
      try {
        const wallet = await getByID(1);
        if (!wallet) {
          navigate("/");
          return;
        }

        if (wallet && wallet.wallet && wallet.active === true) {
          navigate("/home");
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <div className="container ">
      <div className="min-h-screen flex flex-col justify-center">
        <h2 className="max-w-[300px] text  text-5xl font-extrabold  leading-[3.5rem] ">
          Login
        </h2>
        <div className="mt-10">
          <label htmlFor="" className="block text-400">
            Password
          </label>
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              className="bg-transparent w-full  rounded-xl border-2 border-[#232424] py-3 focus:border-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="absolute top-1/2 -translate-y-1/2 right-3 text-xl"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className={` ${
            loading ? "bg-gray-500 pointer-events-none" : "bg-primary"
          } py-3 px-10 mt-10  rounded-xl flex justify-center `}
        >
          {loading ? "Please wait..." : " Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
