const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;

// routes/index.js:

// Main entry point for API routes.
// Should:
// define and export a function that sets up
// and configures your API routes.

// IMPORT
// Category-routes.js
// product-routes.js
// tag-routes.js 