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

    describe('GET /available_payments', () => {
        it('GET request with the right parameters', (done) => {
            const options = {
                url: 'http://localhost:7865/available_payments',
                method: 'GET',
                headers: {
                    'User-Agent': 'request'
                }
            };

            request(options, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(body)).to.eql({ payment_methods: { credit_cards: true, paypal: false } });
                done();
            });
        });
    });

    describe('POST /login', () => {
        it('POST request with the right parameters', (done) => {
            const options = {
                url: 'http://localhost:7865/login',
                method: 'POST',
                headers: {
                    'User-Agent': 'request',
                    'Content-Type': 'application/json'
                },
                json: {
                    userName: 'Betty'
                }
            };

            request(options, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Welcome Betty');
                done();
            });
        });
    });
});