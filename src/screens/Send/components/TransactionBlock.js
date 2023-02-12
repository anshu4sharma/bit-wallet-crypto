import dayjs from "dayjs";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { formatFromWei, shortAddress } from "../../../web3";

const TransactionBlock = ({ transactions, account, currentNetwork }) => {
  return (
    <div className=" border-2 rounded-xl p-4 border-[#3D3C3C] max-h-[200px] overflow-y-auto ">
      {transactions.length > 0 ? (
        transactions.map((txn, i) => {
          const isReceive =
            txn.to_address.toLowerCase() === account.address.toLowerCase();
          return (
            <a
              key={i}
              className="flex items-center justify-between py-2 hover:bg-gray-800 cursor-pointer p-2 rounded-md "
              href={`${currentNetwork.explorer}/tx/${txn.tx_hash}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="grid  grid-flow-col justify-start items-center gap-2">
                <div
                  className={`h-8 w-8 rounded-full border-2 border-primary flex justify-center items-center  text-lg text-primary `}
                >
                  <AiOutlineArrowUp
                    className={`${
                      isReceive ? "rotate-[230deg]" : "rotate-[45deg]"
                    }`}
                  />
                </div>
                <div>
                  <p>{isReceive ? "Receive" : "Send"}</p>
                  <p className="text-[10px] ">
                    <span className="text-blue-400">
                      {dayjs(txn.block_signed_at).format("MM/DD/YYYY")}
                    </span>
                    <span className="inline-block ml-1">
                      {isReceive ? "From" : "To"} :{" "}
                      {shortAddress(txn.from_address)}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <p>{formatFromWei(txn.value)} Matic</p>
                <p className="text-[10px] text-right">
                  {formatFromWei(txn.value)} Matic
                </p>
              </div>
            </a>
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

export default TransactionBlock;
