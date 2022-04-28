// Import Product Controller
const Product = require('../controllers/product.controller');
console.log(Product);


module.exports = (app) => {
    // Test Route
    app.get('/api/products/hello', (req, res) => {
        res.json({message: "hi"})
    })

    // CRUD Product Routes
    app.get('/api/products', Product.findAllProducts);
    app.get('/api/products/:id', Product.findOneProduct);
    app.put('/api/products/update/:id', Product.updateProduct);
    app.post('/api/products/new', Product.createNewProduct);
    app.delete('/api/products/delete/:id', Product.deleteProduct);
}