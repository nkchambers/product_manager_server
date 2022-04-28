// Import mongoose >>> require mongoose
const mongoose = require('mongoose');

// ALT WAY of connecting mongoose to mongodb
// Using module.exports to export connect function
module.exports = (DB) => {
    
    // mongoose connect function using string interpolation 
    // Pass DB var from server.js through export function so it's available for us below
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then( () => console.log(
            `***** Established connection to ${DB}! *****`))
        .catch(errObj => console.log(
            `***** RUH-RO! Something went wrong! *****`, errObj))
}