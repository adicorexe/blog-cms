const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, minlength: 3, maxlength: 160 },
  content: { type: String, required: true, minlength: 1 },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  publishStatus: { type: String, enum: ['draft', 'published'], default: 'draft' },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now }
});

blogPostSchema.pre('save', function(next) {
  this.updatedDate = new Date();
  next();
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
