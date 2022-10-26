const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const router = express.Router();
const { Admin } = require('../models/admins');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
  const user = await Admin.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: 'error', error: 'Invalid login' };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      'secret123'
    );

    return res.json({ status: 'ok', user: token });
  } else {
    return res.json({ status: 'error', user: false });
  }
});

function validate(request) {
  const schema = Joi.object({
    email: Joi.string().email().trim().min(1).max(255).required(),
    password: Joi.string().min(1).max(1024).required(),
  });
  return schema.validate(request);
}

module.exports = router;
