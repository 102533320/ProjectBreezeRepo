const express = require('express');
const Joi = require('joi');
const auth = require('../middlewares/auth');
const router = express.Router();
const _ = require('lodash');
const { matchDetails, validate } = require('../models/matchDetails.js');

router.get('/', async (req, res) => {
  const users = await matchDetails.find({}).sort({ createdAt: -1 });

  res.status(200).json(users);
});

router.get('/', async (req, res) => {
  if (!req.query.id)
    return res.status(418).send('You must provide an id query!');

  const { error } = validateId({ id: req.query.id });
  if (error) return res.status(400).send(error.details[0].message);

  try {
    let result;
    if (req.query.populate === 'true') {
      result = await matchDetails
        .findOne({ user: req.query.id })
        .populate('user');
    } else result = await matchDetails.findOne({ user: req.query.id });

    if (!result) return res.status(404).send('User not found!');

    console.log(result);
    res.send(
      _.pick(result, [
        'birtyday',
        'personality',
        'gender',
        'preference',
        'interests',
        'location',
      ])
    );
  } catch ({ message }) {
    console.log('Error finding details!', message);
    return res.status(404).send(`Error finding details! ${message}`);
  }
});

router.put('/', async (req, res) => {
  if (!req.query.id)
    return res.status(418).send('You must provide an id query!');

  const result = await matchDetails
    .findOne({ user: req.query.id })
    .populate('user');
  if (!result || !result.user['active'])
    return res.status(404).send('User not found!');

  result.set(
    _.pick(req.body, [
      'birtyday',
      'personality',
      'gender',
      'preference',
      'interests',
      'location',
    ])
  );

  result.save();
  console.log(result);
  res.send(result);
});

function validateId(id) {
  const schema = Joi.object({
    id: Joi.string()
      .regex(
        RegExp('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')
      )
      .message('Id does not match the correct pattern!'),
  });

  return schema.validate(id);
}

module.exports = router;
