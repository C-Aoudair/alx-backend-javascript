const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 0 when both inputs are 0', () => {
            expect(calculateNumber('SUM', 0, 0)).to.equal(0);
        });

        it('should round and sum two positive numbers correctly', () => {
            expect(calculateNumber('SUM', 1.2, 2.8)).to.equal(4);
        });

        it('should round and sum two negative numbers correctly', () => {
            expect(calculateNumber('SUM', -1.2, -2.8)).to.equal(-4);
        });

        it('should round and sum mixed positive and negative numbers correctly', () => {
            expect(calculateNumber('SUM', 1.7, -2.3)).to.equal(0);
        });

        it('should round and sum numbers with .5 correctly', () => {
            expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
        });
    });

    describe('SUBTRACT', () => {
        it('should round and subtract two positive numbers correctly', () => {
            expect(calculateNumber('SUBTRACT', 1.2, 0.4)).to.equal(1);
        });

        it('should round and subtract two negative numbers correctly', () => {
            expect(calculateNumber('SUBTRACT', -1.2, -2.8)).to.equal(2);
        });

        it('should round and subtract mixed positive and negative numbers correctly', () => {
            expect(calculateNumber('SUBTRACT', 1.7, -2.3)).to.equal(4);
        });

        it('should round and subtract numbers with .5 correctly', () => {
            expect(calculateNumber('SUBTRACT', 2.5, 1.5)).to.equal(1);
        });
    });

    describe('DIVIDE', () => {
        it('should return "Error" when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 1.2, 0)).to.equal('Error');
        });

        it('should round and divide two positive numbers correctly', () => {
            expect(calculateNumber('DIVIDE', 4.6, 2.2)).to.equal(2.5);
        });

        it('should round and divide two negative numbers correctly', () => {
            expect(calculateNumber('DIVIDE', -4.8, -2.4)).to.equal(2.5);
        });

        it('should round and divide mixed positive and negative numbers correctly', () => {
            expect(calculateNumber('DIVIDE', -4.6, 2.2)).to.equal(-2.5);
        });

        it('should round and divide numbers with .5 correctly', () => {
            expect(calculateNumber('DIVIDE', 5.5, 2.5)).to.equal(2);
        });
    });
});
