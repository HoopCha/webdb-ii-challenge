const express = require('express');
const router = express.Router();

const db = require('../data/dbConfig');


router.get('/', (req, res) => {
    db('cars')
      .then(cars => res.status(200).json(cars))
      .catch(err => res.status(500).json({errMsg: 'error fetching cars'}))
  })

router.post('/', validateCar, (req,res) => {
    db('cars').insert(req.body)
        .then(cars => res.status(200).json(cars))
        .catch(err => res.status(500).json({errMsg: 'error adding car', err}))
})

function validateCar(req, res, next) {
    const errors = []
  
    if (!Object.keys(req.body).length) {
      res.status(400).json({errMsg: 'missing car info'})
    }
  
    if (!req.body.vin) {
      errors.push('vin required')
    }
  
    if (!Number.isInteger(req.body.vin)) {
      errors.push('vin must be a number')
    }
  
    if (!req.body.make) {
      errors.push('car make required')
    }
  
    if (typeof req.body.make != 'string') {
      errors.push('make must be a string')
    }
  
    if (!req.body.model) {
      errors.push('car model is required')
    }
  
    if (typeof req.body.model != 'string') {
      errors.push('model must be a string')
    }
  
    if (!req.body.mileage) {
      errors.push('car mileage required')
    }
  
    if (!Number.isInteger(req.body.mileage)) {
      errors.push('mileage must be an integer')
    }

    if (errors.length) {
      res.status(400).send(errors.join(', '))
    }
    next()
  }


module.exports = router;