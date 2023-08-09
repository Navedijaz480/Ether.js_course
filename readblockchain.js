// const {ethers} = require("ethers");
const { ethers, JsonRpcProvider } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/998516e594f74c49b2882ccb608543d6`);


const querryBlockchain = async() => {

    const block =  await provider.getBlockNumber()
    console.log("the block is ", block);
    let balance = await provider.getBalance("0xcb06C621e1DCf9D5BB67Af79BEa90Ac626e4Ff38")
    console.log("the balance of this address is in bigNumber is  : ",balance);
     balance =await ethers.utils.formatEther(balance)
    console.log("the balance of this address is in integar is  : ",balance);
    // balance =await  ethers.utils.parseEther("balance")
    // console.log("the balance of this address is in integar is  : ",balance);


}
querryBlockchain();