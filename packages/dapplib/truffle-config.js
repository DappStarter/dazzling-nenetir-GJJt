require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remember smile hover close bottom toss'; 
let testAccounts = [
"0xace61e240d829b9b867ef5907d851a32f3fccccf0cf6395697e660ae36035895",
"0x9341da9c63ad8502dec9a33cd12514de727bf74eeed743a1a1c53e31ec860bb4",
"0xe6c90ef5ca9d35a1020d8ddb4ac49c0edcd3be866354b42f4a5fb5e6e31ae7c9",
"0x9ca3e2f16b56fb6d9fa2c270f560d2261d4b5daea55a28828a25dc7f3b9ce089",
"0x50f455c81b308bf30064143e38b0ff57c44a6424c5d7d909d5a5e1d36e3b64bc",
"0x681424a5481f00bf9f2f5fba6d521f978d23973638241d01485c9eade6abfd2b",
"0xdc2fa07a49cb61409330574a0e97e00e407ddde5b590f8213a3ba8e8a220ec4c",
"0x06664bdc9fa6cef180f8f4d1231ae265c93e05102cc171f658c716c5a54c9013",
"0xc1d434eaa12e46b2ea6cf6f012b0aa77d03362e734be6263b812821d6633bdf2",
"0x1145d53b23284113658cab52c1359ebf9e938c4a47e52baefedb149282e50d4b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

