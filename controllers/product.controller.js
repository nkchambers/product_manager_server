// Execute CRUD functions from here >>> will be executed based on routes

// IMPORT MODEL >>> controller to use when performing CRUD functions
const Product = require('../models/product');



// ------------------------- CRUD Functions ------------------------ 
// >>> export functions with module.exports to send as object
// Keys will be name of function : Values will be function itself

module.exports = {
    
    // READ ALL PRODUCTS
    findAllProducts : (req, res) => {
        // same as db.products.find()
        Product.find()
        // IMPORTANT - what we return here is what we receive in React!
            .then(allProducts => res.json({ products: allProducts, 
            message: 'success' }))
            .catch(err => res.json({ error: err,  
            message: 'Something went wrong' }))
    },


    // READ ONE PRODUCT
    findOneProduct : (req, res) => {
        console.log(req.params);
        Product.findById(req.params.id)      
            .then(product => res.json({ product, 
            message: 'success' }))
            .catch(err => res.json({ error: err,  
            message: 'Something went wrong'}))
    },


    // CREATE NEW PRODUCT
    createNewProduct : (req, res) => {
        console.log(req.body);
        
        Product.create(req.body)
            .then(newProduct => res.json ({ newProduct, 
            message: 'success' }))
            .catch(err => {
                console.log('SERVER ERR -> Write to DB / CREATE');
                // Platform
                //res.status(400).json(err)
                // Convention 
                res.status(400).json({ error: err, 
                message: 'error res' })
            })
    },


    // UPDATE PRODUCT
    updateProduct : (req, res) => {
        console.log(req.params);
        console.log(req.body);
        Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then( (updatedProduct) => res.json({ updatedProduct,
            message: 'success' }))
            .catch(err => res.json({ error: err,
            message: 'error res' }))
    },


    // DELETE PRODUCT
    deleteProduct : (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({ error: err, 
            message: 'error res' }))
    }
}
