import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const colorSchema = mongoose.Schema({
    colorName: {
        type: String,
    },
    imageSrc: {
        type: String,
    }
});

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },
    imageSrc: {
        type: String,
        required: true
    },
    sideImagesSrc: [{
        imageSrc: {
            type: String
        },
        alt: {
            type: String
        }
    }],
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    description: {
        type: String,
    },
    vendorName: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
    featuring: {
        type: Boolean,
        required: true,
        default: false
    },
    gender: {
        type: String,
        required: true
    },
    colors: [colorSchema],
    sizes: [String],
    features: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;