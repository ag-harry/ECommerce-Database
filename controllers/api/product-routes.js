const { Router } = require('express');
const router = Router();

const { Product, Category, Tag, ProductTag } = require('../../models');

const productController = {
  getAllProducts: async (req, res) => {
    try {
      // Find all products and include associated Category and Tag data
      const products = await Product.findAll({
        include: [
          { model: Category },
          { model: Tag, through: ProductTag },
        ],
      });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve products' });
    }
  },

  getProductById: async (req, res) => {
    try {
      // Find a product by its `id` value and include associated Category and Tag data
      const product = await Product.findByPk(req.params.id, {
        include: [
          { model: Category },
          { model: Tag, through: ProductTag },
        ],
      });

      if (!product) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }

      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve product' });
    }
  },

  createProduct: async (req, res) => {
    try {
      // Create a new product
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create product' });
    }
  },

  updateProduct: async (req, res) => {
    try {
      // Validate the request body data types
      const { product_name, price, stock, category_id } = req.body;
  
      if (
        typeof product_name !== 'string' ||
        typeof price !== 'number' ||
        typeof stock !== 'number' ||
        typeof category_id !== 'number'
      ) {
        res.status(400).json({ error: 'Invalid data types in request body' });
        return;
      }
  
      // Update a product by its `id` value
      const updatedProduct = await Product.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if (updatedProduct[0] === 0) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
  
      res.json({ message: 'Product updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      // Delete a product by its `id` value
      const deletedProduct = await Product.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (!deletedProduct) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }

      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  },
};

module.exports = productController;
