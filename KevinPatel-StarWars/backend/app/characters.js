const express = require('express');
const http = require('http');
const characters = express.Router();
const bodyParser = express.json();
const Characters = require('../../src/assets/characters.json');

characters.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );
  next();
});

characters.use(bodyParser);

characters.get('/getCharacters', (req,res,next) => {
  let responseArr = Characters.characters;
  return res.status(200).json({
    message: 'found the characters',
    input: responseArr
  });
});

module.exports = characters;
