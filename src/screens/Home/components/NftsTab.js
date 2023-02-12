import React, { useEffect, useState } from "react";
// import { ALCHEMYKEY } from "../../../utils";
// import { formatFromWei } from "../../../web3";
import Nfts from "./Nfts";
import { useSelector } from "react-redux";
const { Network, Alchemy } = require("alchemy-sdk");

const NftsTab = () => {
  const { account, currentNetwork } = useSelector((state) => state.wallet);
  const [nfts, setNfts] = useState([]);
  const settings = {
    apiKey: process.env.REACT_APP_ALCHEMYKEY, // Replace with your Alchemy API Key.
    network:
      currentNetwork.chain === 137
        ? Network.MATIC_MAINNET
        : Network.MATIC_MUMBAI, // Replace with your network.
  };

  const alchemy = new Alchemy(settings);
  useEffect(() => {
    const getData = async () => {
      try {
        const nfts = await alchemy.nft.getNftsForOwner(account?.address);
        // console.log("NFTS", nfts);
        setNfts(nfts.ownedNfts);
      } catch (error) {
        console.log(error);
      }
    };
    if (account?.address) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account?.address, currentNetwork?.chain]);

  return (
    <div className="">
      {nfts?.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 max-h-[400px] overflow-y-auto">
          {nfts.map((asset, i) => {
            return (
              <React.Fragment key={i}>
                <Nfts token={asset} />
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>Not Found</p>
        </div>
      )}
    </div>
  );
};

export default NftsTab;
