const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const myMap = require('../problems/my-map');

describe("myMap(inputArray, callback", () => {
    let newArr;
    let callback;
    beforeEach(()=>{
        newArr = [1,2,3]
        callback = (el) => el * 2;
    })
    it("Should not mutate original array", ()=>{
        const res = myMap(newArr, callback);
        expect(newArr).to.equal(newArr);
    });

    it("Should not call built in Array.map()",()=>{
        const mapSpy = chai.spy.on(newArr, "map");
        myMap(newArr, callback);
        expect(mapSpy).to.have.not.been.called();
    });

    it("Should invoke passed in callback for each array element",()=>{
        const mapSpy = chai.spy(callback);
        myMap(newArr, mapSpy);
        expect(mapSpy).to.have.been.called(newArr.length);
    });
})
