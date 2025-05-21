const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Admin = mongoose.model('Admin', adminSchema, 'admins'); 
// "admins" likha hai taki exactly wahi collection use kare jo MongoDB me bana hai.

module.exports = Admin;
