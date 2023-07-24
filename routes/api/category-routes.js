// This file will contain the controller functions
// for category-related routes.

const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: Product,
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error:'Failed to retrieve categories' });
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Product,
  });

  if (!Category) {
    res.status(404).json({ message: 'Category not found' });
    return;
  }

  res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve category' });
  }
});

router.post('/', async (req, res) => {
  try {
  // create a new category
const category = await Category.create(req.body);
res.status(201).json(category);
  } catch (error) {
  res.status(500).json({ error: 'Failed to create category' });
  }
});

router.put('/:id', async (req, res) => {
  try {
  // update a category by its `id` value
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
  res.status(500).json({ error: 'Failed to updated category' });
  }
});  
  
router.delete('/:id', async (req, res) => {
  try {
  // delete a category by its `id` value
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
});

module.exports = router;

// api/category-routes.js:
// contains the routes for handling category-related operations.
// Define the necessary routes for CRUD operations on categories
// CRUD:
  // CREATE
  // READ
  // UPDATE
  // DELETE

  // getAllCategories, 
  // getAllCategoryById,
  // createCategory,
  // updateCategory,
  // deleteCategory,