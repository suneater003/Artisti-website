import mongoose from 'mongoose';
const { Schema } = mongoose;

const formSchema = new Schema({
    name: String,
    email: String,
    institute: String,
    country: String,
    msg: String
});

const response = mongoose.model('response', formSchema)

export default response;