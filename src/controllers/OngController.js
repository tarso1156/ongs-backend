const connection = require('../database/connections');
const utils = require('../utils/utils');

module.exports = {

    index: async (req, res) => {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },

    store: async (req, res) => {
        const { name, email, whatsapp, city, uf } = req.body;
    
        const id = utils.gernerateUniqueId();
    
        await connection('ongs').insert({
            id, name, email, whatsapp, city, uf
        });
    
        res.json({ id });
    }

};