const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectAssignmentSchema = new Schema({
  employee_id: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  project_code: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  start_date: { type: Date, required: true }
});

module.exports = mongoose.model('ProjectAssignment', projectAssignmentSchema);
