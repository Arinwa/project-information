const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  project_code: { type: String, unique: true, required: true },
  project_name: { type: String, required: true },
  project_description: { type: String, required: true }
});

module.exports = mongoose.model('Project', projectSchema);
