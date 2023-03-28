import mongoose from 'mongoose';
const { Schema } = mongoose;

const memberSchema = new Schema({
    name: String,
    year: String,
    regNo: String
});

const member = mongoose.model('member', memberSchema)

export default member;