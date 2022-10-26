const mongoose = require("mongoose");
const Joi = require("joi");
const { object } = require("joi");

const matchDetails = mongoose.model(
  "match_details",
  new mongoose.Schema(
    {
      user: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
        ref: "users",
      },
      birthday: {
        type: Date,
        required: true,
      },
      gender: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        enum: ["male", "female", "other"],
      },
      preference: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        enum: ["male", "female", "other"],
      },
      personality: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        enum: ["introvert", "extrovert"],
      },
      location: {
        type: Object,
        required: true,
        validator: function (v) {
          const length = v && v.length === 3;
          const suburb =
            v["suburb"] &&
            typeof v["suburb"] === "string" &&
            v["suburb"].length;
          const city =
            v["city"] && typeof v["city"] === "string" && v["city"].length;
          const state =
            v["state"] && typeof v["state"] === "string" && v["state"].length;
          return length && suburb && city && state;
        },
      },
      interests: {
        type: [String],
        required: true,
        validator: function (v) {
          return v && v.length;
        },
      },
    },
    { versionKey: false }
  )
);

function validate(matchDetails) {
  const schema = Joi.object({
    // user: Joi.string()
    //   .required()
    //   .regex(
    //     RegExp("^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$")
    //   )
    //   .message("Id does not match the correct pattern!"),

    birthday: Joi.date().iso().required(),
    gender: Joi.string().lowercase().required(),
    preference: Joi.string().lowercase().required(),
    personality: Joi.string().lowercase().required(),
    location: Joi.object({
      suburb: Joi.string().trim().min(1).max(50).required(),
      city: Joi.string().trim().min(1).max(50).required(),
      state: Joi.string().trim().min(1).max(50).required(),
    })
      .required()
      .length(3),
    interests: Joi.array().min(1).items(Joi.string()).required(),
  }).length(6);
  return schema.validate(matchDetails);
}

module.exports.matchDetails = matchDetails;
module.exports.validate = validate;
