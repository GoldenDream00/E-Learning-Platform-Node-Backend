const paypal = require('paypal-rest-sdk');
const Joi = require('joi');


exports.createAccountLink = async (req, res, next) => {
  try {
    const validateSchema = Joi.object()
      .keys({
        accountId: Joi.string().required()
      })
      .unknown();
    const validate = Joi.validate(req.body, validateSchema);
    if (validate.error) {
      return next(PopulateResponse.validationError(validate.error));
    }
    await DB.User.update(
      { _id: req.user._id },
      {
        paypalEmailId: validate.value.accountId
      }
    );
    return next();
  } catch (error) {
    return next(error);
  }
};
