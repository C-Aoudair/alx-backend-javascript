const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 0 when both inputs are 0', () => {
            assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
        });

        it('should correctly round and sum two positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.2, 2.8), 4);
        });

        it('should correctly round and sum two negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -1.2, -2.8), -4);
        });

        it('should correctly handle mixed positive and negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.7, -2.3), 0);
        });

        it('should round both numbers before summing', () => {
            assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
        });
    });

    describe('SUBTRACT', () => {
        it('should correctly round and subtract two positive numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 0.4), 1);
        });

        it('should correctly round and subtract two negative numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -1.2, -2.8), 2);
        });

        it('should correctly handle mixed positive and negative numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.7, -2.3), 4);
        });

        it('should round both numbers before subtracting', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 1.5), 1);
        });
    });

    describe('DIVIDE', () => {
        it('should return "Error" when dividing by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.2, 0), 'Error');
        });

        it('should correctly round and divide two positive numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 4.6, 2.2), 2.5);
        });

        it('should correctly round and divide two negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -4.8, -2.4), 2.5);
        });

        it('should correctly handle mixed positive and negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -4.6, 2.2), -2.5);
        });

        it('should round both numbers before dividing', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.5), 2);
        });
    });
});
