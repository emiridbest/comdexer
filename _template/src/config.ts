import { AppConfig, getAppConfig, NetworkConfigs } from "@cosmicdapp/logic";

const local: AppConfig = {
  chainId: "comdex-novanet",
  chainName: "comdex-novanet",
  addressPrefix: "comdex",
  rpcUrl: "https://rpc-nova.comdex.one:443",
  httpUrl: "https://rpc-nova.comdex.one:443",
  faucetUrl: "https://rpc-nova.comdex.one:443",
  feeToken: "cmdx",
  stakingToken: "cmdx",
  coinMap: {
    ucosm: { denom: "CMDX", fractionalDigits: 6 },
    uatom: { denom: "ATOM", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const uninet: AppConfig = {
  chainId: "uni",
  chainName: "Uni",
  addressPrefix: "juno",
  rpcUrl: "https://rpc.uni.juno.deuslabs.fi",
  httpUrl: "https://lcd.uni.juno.deuslabs.fi",
  faucetUrl: "https://faucet.uni.juno.deuslabs.fi",
  feeToken: "ujunox",
  stakingToken: "ujunox",
  coinMap: {
    ujunox: { denom: "JUNOX", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const pebblenet: AppConfig = {
  chainId: "pebblenet-1",
  chainName: "Pebblenet",
  addressPrefix: "wasm",
  rpcUrl: "https://rpc.pebblenet.cosmwasm.com",
  httpUrl: "https://lcd.pebblenet.cosmwasm.com",
  faucetUrl: "https://faucet.pebblenet.cosmwasm.com",
  feeToken: "upebble",
  stakingToken: "urock",
  coinMap: {
    urock: { denom: "ROCK", fractionalDigits: 6 },
    upebble: { denom: "PEBBLE", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const configs: NetworkConfigs = { local, uninet, pebblenet };
export const config = getAppConfig(configs);
