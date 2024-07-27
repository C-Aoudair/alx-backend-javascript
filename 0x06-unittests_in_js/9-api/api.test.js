const request = require('request');
const { expect } = require('chai');

describe('API test', () => {
    describe('GET /', () => {
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

    describe('GET /cart/:id', () => {         
        it('GET request with the right parameters', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/12',
                method: 'GET',
                headers: {
                    'User-Agent': 'request'
                }
            };

            request(options, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Payment methods for cart 12');
                done();
            });
        });

        it('GET request with wrong parameters', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/hello',
                method: 'GET',
                headers: {
                    'User-Agent': 'request'
                }
            };

            request(options, (error, response, body) => {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });
});