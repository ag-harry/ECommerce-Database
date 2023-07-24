const { Router } = require('express');
const router = Router();

const { Tag, Product, ProductTag } = require('../../models');

const tagController = {
  getAllTags: async (req, res) => {
    try {
      // Find all tags and include associated Product data
      const tags = await Tag.findAll({
        include: { model: Product, through: ProductTag },
      });
      res.json(tags);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve tags' });
    }
  },

  getTagById: async (req, res) => {
    try {
      // Find a tag by its `id` value and include associated Product data
      const tag = await Tag.findByPk(req.params.id, {
        include: { model: Product, through: ProductTag },
      });

      if (!tag) {
        res.status(404).json({ message: 'Tag not found' });
        return;
      }

      res.json(tag);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve tag' });
    }
  },

  createTag: async (req, res) => {
    try {
      // Create a new tag
      const tag = await Tag.create(req.body);
      res.status(201).json(tag);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create tag' });
    }
  },

  updateTag: async (req, res) => {
    try {
      // Update a tag by its `id` value
      const updatedTag = await Tag.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      if (updatedTag[0] === 0) {
        res.status(404).json({ message: 'Tag not found' });
        return;
      }

      res.json({ message: 'Tag updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update tag' });
    }
  },

  deleteTag: async (req, res) => {
    try {
      // Delete a tag by its `id` value
      const deletedTag = await Tag.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (!deletedTag) {
        res.status(404).json({ message: 'Tag not found' });
        return;
      }

      res.json({ message: 'Tag deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete tag' });
    }
  },
};

module.exports = tagController;
