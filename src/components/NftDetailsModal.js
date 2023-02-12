import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FileSaver from "file-saver";
import { MdDownload, MdSend } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
// import Button from "./Button";
import { transferNft } from "../web3";
import { useSelector } from "react-redux";
// import download from "image-downloader";
// import saveImage from "save-image";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  width: "100%",
  bgcolor: "transparent",
  boxShadow: 24,
  p: 4,
};

export default function NftDetailsModal({ open, setOpen, token }) {
  const { account } = useSelector((state) => state.wallet);
  const [part, setPart] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [toAddress, setToAddress] = React.useState("");
  const handleClose = () => {
    setOpen(false);
  };
  // console.log(token);

  const transferNFT = async () => {
    try {
      setLoading(true);
      const { tx, ok } = await transferNft(
        token.contract.address,
        token.tokenId,
        toAddress,
        account
      );
      console.log(tx);
      setLoading(false);
      if (ok) {
        setToAddress("");
        handleClose();
        setTimeout(() => window.location.reload(), 5000);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const download = (img) => {
    console.log(img);
    fetch(img, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Modal
        open={open}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus
      >
        <Box sx={style}>
          <div className="bg-[#262626] p-4 rounded-md relative">
            <div className="bg-[#010101]  h-6 w-6 rounded-full absolute right-6 top-6 flex justify-center items-center ">
              <button className=" text-sm text-white" onClick={handleClose}>
                <FaTimes />
              </button>
            </div>
            <>
              {part === 0 ? (
                <>
                  <button
                    className="absolute bg-dark-600 h-6 w-6 rounded-full bottom-3 right-3 flex justify-center items-center text-white text-2xl"
                    onClick={async () => download(token?.media[0]?.gateway)}
                  >
                    <MdDownload />
                  </button>
                  <div className="max-h-[300px] overflow-hidden">
                    <img
                      className="w-full"
                      src={token?.media[0]?.gateway}
                      alt=""
                    />
                  </div>
                  <div className="text-white mt-2 py-4">
                    <p>
                      {" "}
                      <b>Name :</b>{" "}
                      {token?.rawMetadata?.name
                        ? token?.rawMetadata?.name
                        : "Not defined"}
                    </p>
                    <p>
                      <b>Description : </b>
                      {token?.rawMetadata?.description
                        ? token?.rawMetadata?.description
                        : "Not defined"}
                    </p>
                    <button
                      onClick={() => {
                        setPart(1);
                      }}
                      className={` 
             bg-primary
             py-2 px-6 mt-4 text-base rounded-xl flex justify-center  items-center max-w-max`}
                    >
                      <p>{"Transfer"}</p>

                      <p className="ml-2 ">
                        <MdSend />
                      </p>
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-white">
                  <h2 className="max-w-[300px]   text-3xl mb-5 font-extrabold  leading-[3.5rem] ">
                    Send Nft
                  </h2>
                  <label htmlFor="" className="block text-400 ">
                    Address
                  </label>
                  <input
                    type="text"
                    className="bg-[#1F1F20] w-full  rounded-xl py-3 px-4 border-none focus:border-none focus:ring-0 text-xl  font-bold min-h-[60px] "
                    value={toAddress}
                    placeholder="0x...."
                    onChange={(e) => setToAddress(e.target.value)}
                  />
                  <button
                    onClick={transferNFT}
                    className={` ${
                      loading ? "bg-gray-500 pointer-events-none" : "bg-primary"
                    } py-3 px-10 mt-10  rounded-xl flex justify-center `}
                  >
                    {loading ? "Please wait..." : " Transfer"}
                  </button>
                  <div className="mb-6"></div>
                </div>
              )}
            </>
          </div>
        </Box>
      </Modal>
    </>
  );
}

// const ParT1 = ()=>{
//   return(

//   )
// }
