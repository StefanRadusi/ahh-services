const cloudinary = require('cloudinary');
const coudinaryAuth = require('../config/credentials.json').cloudinary;

cloudinary.config(coudinaryAuth);

module.exports = cloudinary;