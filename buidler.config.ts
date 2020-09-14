import { BuidlerConfig, usePlugin } from "@nomiclabs/buidler/config";

usePlugin("@nomiclabs/buidler-waffle");
usePlugin("buidler-typechain");
usePlugin("solidity-coverage");

const config: BuidlerConfig = {
  defaultNetwork: "buidlerevm",
  solc: {
    version: "0.6.8",
  },
  networks: {
    coverage: {
      url: 'http://127.0.0.1:8555' // Coverage launches its own ganache-cli client
    },
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v4",
  }
}

export default config;
  
