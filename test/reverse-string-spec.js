const chai = require("chai");
const expect = chai.expect;

const reverseString = require('../problems/reverse-string')

describe('reverseString(string)', ()=>{
    let newWord;
    beforeEach(() => {
        newWord = 'fun';
    });
    it('Should return string reversed', ()=>{
        const results = reverseString(newWord);
        expect(results).to.equal('nuf');
    })
})
