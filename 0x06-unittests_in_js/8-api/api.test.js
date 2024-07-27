const request = require('request');
const { expect } = require('chai');

describe('API test', () => {
    it('GET request with the right parameters', (done) => {
        const options = {
            url: 'http://localhost:7865',
            method: 'GET',
            headers: {
                'User-Agent': 'request'
            }
        };

        request(options, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});