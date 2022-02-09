import express from 'express';
import expressValidator from 'express-validator';
import checkFieldErr from '../Middlewares/fieldError';
const {check} = expressValidator;
const validator  = [
      check('id')
      .notEmpty().withMessage('id is required')
      .isNumeric().withMessage('id MUST BE A NUMBER'),
      check('name')
      .notEmpty().withMessage('name is required'),
      check('phone')
      .notEmpty().withMessage('id is required')
      .isMobilePhone().withMessage('invalid phone NUMBER'),
      check('email')
      .notEmpty().withMessage('id is required')
      .isEmail().withMessage('invalid email'),
      check('address')
      .notEmpty().withMessage('id is required'),
      checkFieldErr
      
      
]
export default validator;
