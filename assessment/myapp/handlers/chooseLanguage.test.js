//UNIT TEST
const chooseLanguage = require('./chooseLanguage');
const assert = require('assert')

describe("ChooseLanguage test", () => {
    test("expect status to be false for invalid language", () => {
        const response = chooseLanguage('sss');
        assert.strictEqual(response.status, false);
       
    });
    test("expect status to be true for valid and lowecase language", () => {
        const response = chooseLanguage('Yrb');
        assert.strictEqual(response.status, true)
        
    });

    test("expect status to be true for valid and uppercase language", () => {
        const response = chooseLanguage('HSA');
        assert.strictEqual(response.status, true)
        
    });
    test("expect status to be false for empty language", () => {
        const response = chooseLanguage('');
        assert.strictEqual(response.status, false)
    });
   
});