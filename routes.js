const express = require('express');
const router = express.Router();
const multer = require('multer');
const Docbox = require('./models/docboxSchema');
const AWS = require('aws-sdk');

// Configure AWS S3
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const s3 = new AWS.S3();

// Multer configuration
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
  },
});

// Routes go here

module.exports = router;