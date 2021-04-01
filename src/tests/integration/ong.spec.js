const request = require('supertest');
const app = require('../../app');
const connection = require('../../database/connections');

describe('ONG0', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: 'Test ONG',
                email: 'test@test.com',
                whatsapp: '499999999999',
                city: 'Caçador',
                uf: 'SC'
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});