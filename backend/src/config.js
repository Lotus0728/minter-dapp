require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
<<<<<<< HEAD
const namePrefix = "GMonsters by Timka";
const description = "Introducing Gmonsters - a collection of 5000 randomly generated NFTs featuring one-of-a-kind creatures with unique personalities. Created by a talented young artist, these quirky creatures are known as Garbage Monsters and are available for adoption on the Ethereum blockchain.";
=======
const namePrefix = "Timkasfriends";
const description = "Hello, my name is Timka i am 12 years old nft artist. This is my first collection inspired by anime and computer games";
>>>>>>> 9c89b8496e65739b8828c0c75225a08747aa00fb
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const layerConfigurations = [
  {
<<<<<<< HEAD
    growEditionSizeTo: 4997,
    layersOrder: [
      { name: "Background" },
      { name: "Trash Can" },
      { name: "Monster" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Accessory" },
      { name: "Head" },
    ],
  }, 
  {
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "Legendary" },

=======
    growEditionSizeTo: 2001,
    layersOrder: [
      { name: "Background" }, 
      { name: "Body" },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Headdress" },
      { name: "Badge" },
>>>>>>> 9c89b8496e65739b8828c0c75225a08747aa00fb
    ],
  }, 
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
<<<<<<< HEAD
  width: 1500,
  height: 1500,
=======
  width: 1080,
  height: 1080,
>>>>>>> 9c89b8496e65739b8828c0c75225a08747aa00fb
  smoothing: false,
};

const extraMetadata = {
<<<<<<< HEAD
  external_url: "https://garbagemonsters.io", // Replace with your website or remove this line if you do not have one.
=======
  external_url: "https://Timkasfriends.xyz", // Replace with your website or remove this line if you do not have one.
>>>>>>> 9c89b8496e65739b8828c0c75225a08747aa00fb
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'goerli'; // only goerli, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Timkasfriends.xyz';
const CONTRACT_SYMBOL = 'TMF';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
<<<<<<< HEAD
const OWNER_ADDRESS = 'YOUR WALLET ADDRESS HERE';
const TREASURY_ADDRESS = 'YOUR WALLET ADDRESS HERE';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.01; // Minting price per NFT. Goerli = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
=======
const OWNER_ADDRESS = '0x6d6838245AF22d0D5Db06080764a43ffF782c8C9';
const TREASURY_ADDRESS = '0x6d6838245AF22d0D5Db06080764a43ffF782c8C9';
const MAX_SUPPLY = 2000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.003; // Minting price per NFT. Rinkeby = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
>>>>>>> 9c89b8496e65739b8828c0c75225a08747aa00fb
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-06-27T03:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-06-25T19:00:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 700; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x6d6838245AF22d0D5Db06080764a43ffF782c8C9"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x6d6838245AF22d0D5Db06080764a43ffF782c8C9"]; // only update if you want to manually set the whitelisted addresses
// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Will you become a Timka's friend?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeiho3sslw6ued5osvvjzhbaxhhxgopnkesr3vs7ogkyhvcy2m7igpu"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
