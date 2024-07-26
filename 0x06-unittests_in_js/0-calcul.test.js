const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('should return 0 when both inputs are 0', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('should round down when both numbers are closer to the lower integer', () => {
        assert.strictEqual(calculateNumber(1.2, 2.3), 3);
    });

    it('should round up when both numbers are closer to the higher integer', () => {
        assert.strictEqual(calculateNumber(1.7, 2.8), 5);
    });

    it('should correctly round and sum negative numbers', () => {
        assert.strictEqual(calculateNumber(-1.7, -2.8), -5);
    });

    it('should handle a mix of positive and negative numbers', () => {
        assert.strictEqual(calculateNumber(1.7, -2.8), -1);
    });

    it('should correctly sum when one number is zero', () => {
        assert.strictEqual(calculateNumber(0, 2.8), 3);
    });

    it('should correctly sum when both numbers are halves', () => {
        assert.strictEqual(calculateNumber(1.5, 2.5), 5);
    });

    it('should handle large numbers', () => {
        assert.strictEqual(calculateNumber(1e10 + 0.9, 1e10 + 0.1), 20000000001);
    });
});
