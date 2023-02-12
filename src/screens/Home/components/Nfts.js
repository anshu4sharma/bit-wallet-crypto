/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

import NftDetailsModal from "../../../components/NftDetailsModal";
const Nfts = ({ token }) => {
  const [tokenData, setTokenData] = useState({});
  const [error, setError] = useState(false);
  const [open, setOpen] = React.useState(false);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get(token.tokenUri.gateway);
  //       setTokenData(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //       setError(true);
  //     }
  //   };

  //   getData();
  // }, [token?.tokenUri?.gateway]);

  return (
    <>
      {error ? (
        <div className="bg-dark-600 p-2 rounded-md overflow-hidden h-[150px] flex justify-center items-center text-red-400">
          Fetch Error
        </div>
      ) : (
        <div
          onClick={() => setOpen(true)}
          className="relative bg-dark-600 p-2 rounded-md overflow-hidden h-[150px] cursor-pointer"
        >
          <img
            className="h-full w-full"
            src={token?.media[0]?.gateway}
            alt=""
          />
        </div>
      )}
      <NftDetailsModal
        open={open}
        setOpen={setOpen}
        // tokenData={tokenData}
        token={token}
      />
    </>
  );
};

export default Nfts;
