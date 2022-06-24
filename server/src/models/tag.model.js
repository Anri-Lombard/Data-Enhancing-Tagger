// tag.model.js
import mongoose from 'mongoose';
const tagSchema = new mongoose.Schema({
    tagID: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    balance: {
        type: String,
        required: true
    },
    transactionValue: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    }
});

const Tag = mongoose.model("Tag", tagSchema);
export default Tag;
