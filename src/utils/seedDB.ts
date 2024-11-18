/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import CategoryRepository from '@/repositories/CategoryRepository';

const jewelryProducts = [
  {
    slug: 'gold-ring',
    media: {
      mainMedia: { image: { url: '/products/jewelry/product1.jpg' } },
      items: [{ image: { url: '/products/jewelry/product2.jpg' } }],
    },
    price: 299.99,
    additionalInfoSections: [
      { title: 'Material', description: '18K Gold' },
      { title: 'Size', description: 'Adjustable' },
    ],
    isFeatured: true,
    isNew: true,
    discount: 10,
    stock: 50,
    tags: ['gold', 'ring', 'fashion'],
  },
  {
    slug: 'diamond-necklace',
    media: {
      mainMedia: { image: { url: '/products/jewelry/product2.jpg' } },
      items: [{ image: { url: '/products/jewelry/product3.jpg' } }],
    },
    price: 99.99,
    additionalInfoSections: [
      { title: 'Stone', description: 'Diamond' },
      { title: 'Length', description: '18 inches' },
    ],
    isFeatured: true,
    isNew: false,
    discount: 5,
    stock: 3,
    tags: ['diamond', 'necklace', 'luxury'],
  },
  {
    slug: 'silver-bracelet',
    media: {
      mainMedia: { image: { url: '/products/jewelry/product3.jpg' } },
      items: [{ image: { url: '/products/jewelry/product4.jpg' } }],
    },
    price: 149.99,
    additionalInfoSections: [
      { title: 'Material', description: 'Sterling Silver' },
    ],
    isFeatured: false,
    isNew: true,
    stock: 30,
    tags: ['silver', 'bracelet', 'gift'],
  },
  {
    slug: 'pearl-earrings',
    media: {
      mainMedia: { image: { url: '/products/jewelry/product4.jpg' } },
      items: [{ image: { url: '/products/jewelry/product1.jpg' } }],
    },
    price: 99.99,
    additionalInfoSections: [
      { title: 'Pearls', description: 'Freshwater' },
      { title: 'Style', description: 'Classic' },
    ],
    isFeatured: false,
    isNew: false,
    stock: 5,
    tags: ['pearl', 'earrings', 'classic'],
  },
];

const categoryId = '6738c2e5a6cb16d04ee547c9';
async function seedDB() {
  try {
    for (const product of jewelryProducts) {
      const savedProduct = await CategoryRepository.createProductInCategory(
        product,
        categoryId,
      );
      console.log(`Product added: ${savedProduct.slug}`);
    }
    console.log('All products have been added successfully.');
  } catch (error) {
    console.error('Error adding products:', error);
  }
}

export default seedDB;
