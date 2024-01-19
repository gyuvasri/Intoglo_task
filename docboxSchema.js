const mongoose = require('mongoose');

const DocboxSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  createdBy: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Docbox', DocboxSchema);