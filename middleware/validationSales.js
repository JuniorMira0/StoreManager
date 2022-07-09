const Joi = require('joi');

const schema = Joi.array().items(Joi.object({
  productID: Joi
    .number()
    .integer()
    .positive()
    .required()
    .strict()
    .messages({
      'any.required': '400|"productId" is required',
    }),
  quantity: Joi
    .number()
    .integer()
    .positive()
    .strict()
    .messages({
      'any.required': '400|"quantity" is required',
      'number.positive': '422|"quantity" must be greater than or equal to 1',
    }),
}));

module.exports = { schema };