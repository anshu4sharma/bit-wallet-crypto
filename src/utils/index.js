import toast from "react-hot-toast";

export const PROVIDER = "https://data-seed-prebsc-1-s1.binance.org:8545/";

export const copyToClipBoard = async (copyMe) => {
  if (!copyMe) {
    return;
  }
  try {
    await navigator.clipboard.writeText(copyMe);
    toast.success("Copied to Clipboard !");
  } catch (err) {
    toast.error("copy failed");
  }
};

export const BASECOVALENT = "https://api.covalenthq.com/v1";
export const NETWORKS = [
  {
    id: 1,
    rpc: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMYKEY}`,
    text: "Polygon Mainnet",
    chain: 137,
    explorer: "https://polygonscan.com",
  },
  {
    id: 2,
    rpc: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMYKEY}`,
    text: "Polygon Testnet",
    chain: 80001,
    explorer: "https://mumbai.polygonscan.com",
  },
];
