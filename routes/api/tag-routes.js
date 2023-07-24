//This file will contain the controller functions
// for tag-related routes. 
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll({
    include: [{ model: Product }],
  });
  res.json(tags);
} catch (error) {
  res.status(500).json(error);
}

});

router.get('/:id', async (req, res) => {
  try {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag = await Tag.findByPk(req.params.id,
    { include: [{ model: Product }], 
  });
  if (!tag) {
    res.status(404).json({ message: 'Tag not found'});
  } else {
    res.json(tag);
  }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new tag
    const tag = await Tag.create(re.body);
    res.status(201).json(tag);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
  // update a tag's name by its `id` value
 const updatedTag = await Tag.update({ name: req.body.name },
      {
        where: { id: req.params.id },
});
    if (updatedTag[0] === 0) {
  res.status(404).json({ message: 'Tag not found' });
  } else {
  res.json({ message: 'Tag updated successfully' });
  }
    } catch (error) {
  res.status(500).json(error);
    }
});

router.delete('/:id', async (req, res) => {
  try {
  // delete on tag by its `id` value
  const deletedTag = await Tag.destroy({
    where: { id: req.params.id },
  });
  if (!deletedTag) {
    res.status(404).json({ message: 'Tag not found' });
  } else {
    res.json({ message: 'Tag deleted successfully' });
  }
} catch (error) {
  res.status(500).json(error);
}
});

module.exports = router;
