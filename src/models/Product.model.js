import mongoose from 'mongoose'

const Price = new mongoose.Schema({
    value: String | Number | NaN,
}, { timestamps: true })

const Product = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    max: [Price],
    min: [Price],
    dominant: [Price],
}, { timestamps: true })

export default mongoose.model('Product', Product)