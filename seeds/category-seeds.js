const { Category } = require('../models');

const categoriesData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = async () => 
{ try {

await Category.bulkCreate(categoriesData);
console.log('Categories seeded successfully');

} catch (err) {

  console.error(err);

}

};

module.exports = seedCategories;
