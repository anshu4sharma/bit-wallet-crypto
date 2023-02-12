export const STORENAME = "accounts";
export const DBConfig = {
  name: "Bitwallet",
  version: 1,
  objectStoresMeta: [
    {
      store: STORENAME,
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "wallet", keypath: "wallet", options: { unique: false } },
        {
          name: "jsonwallet",
          keypath: "jsonwallet",
          options: { unique: false },
        },
        {
          name: "active",
          keypath: "active",
          options: { unique: false},
        },
      ],
    },
  ],
};
