// Import mongoose
const mongoose = require('mongoose');


// The product schema - rules which product entries in db must follow
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 characters long"]
    },
    price: {
        type: Number,
        required: [true, "{PATH} is required"],
        min: [1, "{PATH} must be set to minimum value of $1 or greater."]
    },
    description: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 5 characters long"]
    }
}, {timestamps: true})




// Instantiate the product schema and export 
// >>> controller will then use schema to make queries to the db & execute CRUD functions
const Product = mongoose.model('Product', ProductSchema);  


// Exporting product model
module.exports = Product;
