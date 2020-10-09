import foodIcons from 'utils/foodIcons';

export function createProduct(name, dateAdded, quantity, icon, category) {
  return {
    name,
    dateAdded,
    quantity,
    icon: foodIcons[icon],
    category,
    categoryName: categoryNames[category],
  }
}
const categoryNames = {
  groceries: 'Groceries',
  fruit: 'Fruit',
  vegetables: 'Vegetables',
  meatAndFish: 'Meat and Fish',
  dairy: 'Dairy products',
  frozen: 'Frozen',
  drinks: 'Drinks',
  child: 'Child',
}
export const demoProducts = [
  createProduct('Mustard', '11 days', '0.5 l', 'mustard', 'groceries'),
  createProduct('Bread', '1 day', '500 g', 'bread', 'groceries'),
  createProduct('Ketchup', '3 months', '0.5 l', 'ketchup', 'groceries'),
  createProduct('Sunflower oil', '1 month', '1 l', 'sunflower-oil', 'groceries'),
  createProduct('Avocado', '5 days', '600 g', 'avocado', 'fruit'),
  createProduct('Apple', '4 days', '1 kg', 'apple', 'fruit'),
  createProduct('Pear', '2 days', '2 kg', 'pear', 'fruit'),
  createProduct('Blueberry', '11 days', '300 g', 'blueberry', 'fruit'),
  createProduct('Watermellon', '2 days', '12 kg', 'watermellon', 'fruit'),
  createProduct('Pepper', '2 days', '12 kg', 'pepper', 'vegetables'),
  createProduct('Bell Pepper', '2 days', '12 kg', 'bell-pepper', 'vegetables'),
  createProduct('Chicken', '2 days', '500 g', 'chicken', 'meatAndFish'),
  createProduct('Salmon', '6 days', '2 kg', 'salmon', 'meatAndFish'),
  createProduct('Pork', '2 day', '1 kg', 'pork', 'meatAndFish'),
  createProduct('Beef', '1 day', '2 kg', 'beef', 'meatAndFish'),
  createProduct('Milk', '12 days', '1 l', 'milk', 'dairy'),
  createProduct('Yogurt', '6 days', '1 l', 'yogurt', 'dairy'),
  createProduct('Cheese', '2 days', '300 g', 'cheese', 'dairy'),
  createProduct('Ice', '31 days', '300 g', 'ice', 'frozen'),
  createProduct('Ice cream', '29 days', '500 g', 'ice-cream', 'frozen'),
  createProduct('Wine', '5 days', '1.5 l', 'wine', 'drinks'),
  createProduct('Beer', '2 days', '3 l', 'beer', 'drinks'),
  createProduct('Juice', '1 days', '1.5 l', 'juice', 'drinks'),
  createProduct('Coke', '1 days', '2 l', 'coke', 'drinks'),
  createProduct('Mineral water', '19 days', '2 l', 'mineral-water', 'drinks'),
  createProduct('Jam', '5 days', '500 g', 'jam', 'child'),
  createProduct('Peanut butter', '2 days', '250 g', 'peanut-butter', 'child'),
]