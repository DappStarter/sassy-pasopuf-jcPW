require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture strike cost soap unlock install cover army gift'; 
let testAccounts = [
"0xa20fe09bcfe952a979d28cb20cc25f1759694324929a0a6da635a571d4f85e4c",
"0xf5214ddacbb3f35e1aba7cb474b62388326adb21abeb6ab31f9c0616ba82b29a",
"0xa274c48e2810e68aa85baa3628327895fa3dcd36cb186476ea85a8f2538a36ea",
"0x93618ba2e91b2cf280d68693050fb82ec25f626e7546c57b553444b88f6e7e11",
"0xa65943bff8350e94cf97d4b2df60ec23da4f014900742066f2ea7be4a264976f",
"0x1b415e69c8bf9f133a7197df04cbccf89eb2692c0a5fdd20041b76a25d583da9",
"0xea815cf1525252214ecef77aa938600c2d8857dfadcecdfb84109d7d788acc97",
"0x33d4aeefc2173c78e86d23ea2a28087622fa5e6aaf0753d0d5f061007688f0db",
"0x77f2f84ea128f2d9114698c8cc746f907baa797feea95a65c9a70982151686ba",
"0x732f7b6390b96f4d595bd892238cfe1fa7eed26643266c3ada11a56020c918a9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

