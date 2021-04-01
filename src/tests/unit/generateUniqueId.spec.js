const utils = require('../../utils/utils');

describe('Shoul Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        expect(utils.gernerateUniqueId()).toHaveLength(8);
    });
});