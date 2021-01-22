import { ethers } from "hardhat";
import { solidity } from "ethereum-waffle";
import chai from "chai";
import mocha from "mocha";

import { Greeter } from '../typechain/Greeter';

chai.use(solidity);
const { expect} = chai;

describe("Greeter", function () {
    let greeter: Greeter;
    beforeEach(async()=>{
        const greeterFactory = await ethers.getContractFactory("Greeter");  
        greeter = (await greeterFactory.deploy("Hello, world!")) as Greeter;
        await greeter.deployed();
    })

    it("should do something right", async function () {
        expect(await greeter.greet()).to.equal("Hello, world!");
    });
});
