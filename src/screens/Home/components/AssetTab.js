import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASECOVALENT } from "../../../utils";
import { formatFromWei } from "../../../web3";
import { useSelector } from "react-redux";
const AssetTab = () => {
  const [balances, setBalances] = useState(null);
  const { account, currentNetwork } = useSelector((state) => state.wallet);

  useEffect(() => {
    const getData = async () => {
      const {
        data: { data },
      } = await axios.get(
        `${BASECOVALENT}/${currentNetwork.chain}/address/${account?.address}/balances_v2/?key=${process.env.REACT_APP_APIKEYCOVLANT}`
      );
      // console.log(data);
      setBalances(data.items);
    };
    if (account?.address && currentNetwork.chain) {
      getData();
    }
  }, [account, currentNetwork]);
  return (
    <div className="">
      {balances?.length > 0 ? (
        balances.map((asset, i) => {
          return (
            <div className="flex justify-between py-2" key={i}>
              <div className="grid  grid-flow-col justify-start items-center gap-2">
                <div>
                  <p>{asset.contract_ticker_symbol}</p>
                </div>
              </div>
              <div>
                <p>
                  {formatFromWei(asset.balance)} {asset.contract_ticker_symbol}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex justify-center items-center">
          <p>Not Found</p>
        </div>
      )}
    </div>
  );
};

export default AssetTab;
