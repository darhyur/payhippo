//API TEST 
const request = require('supertest')
const express = require('express')
const app = require('./app.js')



  
describe("POST  /language", () => {
    describe("given a valid language as eng", () => {
        test("Response code should be 200", async() => {
            const response = await request(app).post('/language').send({language: 'Eng'});
            expect(response.statusCode).toEqual(200);
            expect(response.body.status).toEqual(true);
            expect(response.body.message).toEqual('Language supported!');
            expect(response.body.data.message).toEqual('Hello World!');
        });
    });
    describe("given a valid language as eng", () => {
        test("Response code should be 200", async() => {
            const response = await request(app).post('/language').send({language: 'igb'});
            expect(response.statusCode).toEqual(200);
            expect(response.body.status).toEqual(true);
            expect(response.body.message).toEqual('Language supported!');
            expect(response.body.data.message).toEqual('Ndewo Ụwa!');
        });
    });
    describe("given a valid language as yrb", () => {
        test("Response code should be 200", async() => {
            const response = await request(app).post('/language').send({language: 'Yrb'});
            expect(response.statusCode).toEqual(200);
            expect(response.body.status).toEqual(true);
            expect(response.body.message).toEqual('Language supported!');
            expect(response.body.data.message).toEqual('Mo ki O Ile Aiye!');
        });
    });
    describe("given a valid language as yrb", () => {
        test("Response code should be 200", async() => {
            const response = await request(app).post('/language').send({language: 'hsa'});
            expect(response.statusCode).toEqual(200);
            expect(response.body.status).toEqual(true);
            expect(response.body.message).toEqual('Language supported!');
            expect(response.body.data.message).toEqual('Sannu Duniya!');
        });
    });
    describe("given a valid language in lowercase", () => {
        test("Response code should be 200", async() => {
            const response = await request(app).post('/language').send({language: 'yrb'});
            expect(response.statusCode).toEqual(200);
            expect(response.body.status).toEqual(true);
            expect(response.body.message).toEqual('Language supported!');
            expect(response.body.data.message).toEqual('Mo ki O Ile Aiye!');
        });
    });
    describe("given a valid language in uppercase", () => {
        test("Response code should be 200", async() => {
            const response = await request(app).post('/language').send({language: 'YRB'});
            expect(response.statusCode).toEqual(200);
            expect(response.body.status).toEqual(true);
            expect(response.body.message).toEqual('Language supported!');
            expect(response.body.data.message).toEqual('Mo ki O Ile Aiye!');
        });
    });
    describe("given an invalid  language", () => {
        test("Response code should be 400", async() => {
            const response = await request(app).post('/language').send({language: 'dutch'});
            expect(response.statusCode).toEqual(400);
            expect(response.body.status).toEqual(false);
            expect(response.body.message).toEqual('The requested language is not supported');
        });
    });
    describe("given an empty language", () => {
        test("Response code should be 500", async() => {
            const response = await request(app).post('/language').send({language: ''});
            expect(response.statusCode).toEqual(500);
           
        });
    });

    describe("given an empty request body", () => {
        test("Response code should be 500", async() => {
            const response = await request(app).post('/language').send();
            console.log(response.body)
            expect(response.statusCode).toEqual(500);
        });
    });
});
