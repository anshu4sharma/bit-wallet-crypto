import React, { useState } from "react";
import AssetTab from "./AssetTab";
import NftsTab from "./NftsTab";

const Assets = () => {
  const [currentActive, setCurrentActive] = useState(0);
  const tabs = ["NFT's", "Assets"];

  return (
    <div>
      <div className="grid grid-cols-2 gap-1 mt-10">
        {tabs.map((val, i) => (
          <button
            key={i}
            className={`p-2 block  border-b-2  ${
              i === currentActive ? "border-primary" : "border-transparent"
            }`}
            onClick={() => setCurrentActive(i)}
          >
            <p className="text-xl text-center">{val}</p>
          </button>
        ))}
      </div>
      <div className="mt-6">
        {currentActive === 1 ? <AssetTab /> : <NftsTab />}
      </div>
    </div>
  );
};

export default Assets;
