const { Router } = require('express');
const router = Router();
const { Category, Product } = require('../../models');

const categoryController = {
  getAllCategories: async (req, res) => {
    try {
      // Find all categories and include associated Products
      const categories = await Category.findAll({
        include: Category, Product,
      });
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve categories' });
    }
  },

  getCategoryById: async (req, res) => {
    try {
      // Find a category by its `id` value and include associated Products
      const category = await Category.findByPk(req.params.id, {
        include: Category, Product,
      });

      if (!category) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }

      res.json(category);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve category' });
    }
  },

  createCategory: async (req, res) => {
    try {
      // Create a new category
      const category = await Category.create(req.body);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create category' });
    }
  },

  updateCategory: async (req, res) => {
    try {
      // Update a category by its `id` value
      const updatedCategory = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      if (updatedCategory[0] === 0) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }

      res.json({ message: 'Category updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update category' });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      // Delete a category by its `id` value
      const deletedCategory = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (!deletedCategory) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }

      res.json({ message: 'Category deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete category' });
    }
  },
};

module.exports = categoryController;
