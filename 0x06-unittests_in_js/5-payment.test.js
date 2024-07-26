const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
    let spyCalculator;
    let spyConsole;

    beforeEach(() => {
        spyCalculator = sinon.spy(Utils, 'calculateNumber');
        spyConsole = sinon.spy(console, 'log');
    });

    afterEach(() => {
        spyCalculator.restore();
        spyConsole.restore();
    });

    it('should call sendPaymentRequestToAPI with 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);

        expect(spyCalculator.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spyCalculator.returned(120)).to.be.true;
        expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
    });

    it('should call sendPaymentRequestToAPI with 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);

        expect(spyCalculator.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
        expect(spyCalculator.returned(20)).to.be.true;
        expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
    });
});