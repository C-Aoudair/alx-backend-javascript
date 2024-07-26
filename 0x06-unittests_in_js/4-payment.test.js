const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
    let spy;
    let spyConsole;
    let stub;

    beforeEach(() => {
        spyConsole = sinon.spy(console, 'log');
        stub = sinon.stub(Utils, 'calculateNumber');
        stub.returns(10);
    });

    afterEach(() => {
        spyConsole.restore();
        stub.restore();
    });

    it('should call Utils.calculateNumber with the correct arguments', () => {
        sendPaymentRequestToApi(100, 20);

        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(stub.returned(10)).to.be.true;
    });

    it('should log the correct message to the console', () => {
        sendPaymentRequestToApi(100, 20);

        expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});
