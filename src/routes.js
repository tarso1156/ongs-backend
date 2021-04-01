const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const router = express.Router();

router.get('/ongs', OngController.index);
router.post('/ongs', celebrate({
      [Segments.BODY]: Joi.object({
          name: Joi.string().required(),
          email: Joi.string().required().email(),
          whatsapp: Joi.string().required().min(10),
          city: Joi.string().required(),
          uf: Joi.string().required().length(2)
      })
}), OngController.store);

router.post('/session', SessionController.store);

router.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

router.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object({
        id: Joi.number()
    })
}), IncidentController.index);
router.post('/incidents', IncidentController.store);
router.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete);

module.exports = router;