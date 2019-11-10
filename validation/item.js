const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : "";
    data.body = validText(data.body) ? data.body : "";


    if (!Validator.isLength(data.title, { min: 0, max: 50 })) {
        errors.title = "Description must be between 5 and 50 characters";
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = "Description field is required";
    }
    ////////Body
    if (!Validator.isLength(data.body, { min: 0, max: 200 })) {
        errors.body = "Body must be between 5 and 200 characters";
    }

    if (Validator.isEmpty(data.body)) {
        errors.body = "Body field is required";
    }

    ////////quantity
    if (Validator.isEmpty(data.quantity)) {
        errors.quantity = "Quantity field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};