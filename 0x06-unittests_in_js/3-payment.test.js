const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
    let spy;

    beforeEach(() => {
        spy = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(() => {
        spy.restore();
    });

    it('shoul call the same calculateNumber in the two places', () => {
        sendPaymentRequestToApi(100, 20);

        expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spy.returned(120)).to.be.true;
    });
});
