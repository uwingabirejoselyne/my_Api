const mongoose = require('mongoose');
const schema = mongoose.Schema({
    image: String,
    title: String,
    description: String,
})
module.exports = mongoose.model('Blogs',schema)