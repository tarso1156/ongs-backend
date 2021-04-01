const crypto = require('crypto');

module.exports = {
    gernerateUniqueId: () => {
        return crypto.randomBytes(4).toString('HEX');
    }
}