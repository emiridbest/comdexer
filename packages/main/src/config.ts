import { AppConfig, getAppConfig, NetworkConfigs } from "@cosmicdapp/logic";

const local: AppConfig = {
  chainId: "testing",
  chainName: "Testing",
  addressPrefix: "wasm",
  rpcUrl: "http://localhost:26659",
  httpUrl: "http://localhost:1317",
  faucetUrl: "http://localhost:8000",
  feeToken: "ucosm",
  stakingToken: "uatom",
  coinMap: {
    ucosm: { denom: "COSM", fractionalDigits: 6 },
    uatom: { denom: "ATOM", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const uninet: AppConfig = {
  chainId: "comdex-novanet",
  chainName: "comdex-novanet",
  addressPrefix: "comdex",
  rpcUrl: "https://rpc-nova.comdex.one:443",
  httpUrl: "https://rest-nova.comdex.one:443",
  faucetUrl: "http://faucet.comdex.one/",
  feeToken: "comdex",
  stakingToken: "comdex",
  coinMap: {
    comdex: { denom: "CMDX", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};


const configs: NetworkConfigs = { local, uninet };
export const config = getAppConfig(configs);
