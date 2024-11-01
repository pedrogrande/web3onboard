// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import * as bootstrap from "bootstrap";
import Onboard, { chains } from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";

const injected = injectedModule();

const wallets = [injected];

const INFURA_ID = ENV["INFURA_ID"];

const chains = [
  {
    id: 1,
    token: "ETH",
    label: "Sepolia",
    rpcUrl: "https://arbitrum-sepolia.infura.io/v3/${INFURA_ID}",
  },
];
const appMetadata = {
  name: "Web3 Onboard Example",
  description: "My Web3 app using Onboard",
  recommendedInjectedWallets: [
    { name: "Coinbase", url: "https://wallet.coinbase.com/" },
    { name: "MetaMask", url: "https://metamask.io" },
  ],
};
const onboard = Onboard({
  // This javascript object is unordered meaning props do not require a certain order
  wallets,
  chains,
  appMetadata,
});
