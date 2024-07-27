const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
    it('should return the correct value', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.include({ data: 'Successful response from the API' });
                done();
            })
            .catch((error) => {
                done(error);
            });
    });
});