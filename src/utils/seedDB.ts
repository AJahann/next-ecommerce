/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import CategoryRepository from '@/repositories/CategoryRepository';

const sampleImages = [
  '/products/jewelry/product1.jpg',
  '/products/jewelry/product2.jpg',
  '/products/jewelry/product3.jpg',
  '/products/jewelry/product4.jpg',
  '/products/jewelry/product5.jpg',
  '/products/jewelry/product6.jpg',
  '/products/jewelry/product7.jpg',
];

const generateRandomImages = (count: number) => {
  const shuffled = sampleImages.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map((url) => ({ image: { url } }));
};

const generateRandomDescription = (): string => {
  const descriptions = [
    'A timeless piece of jewelry to complement your style.',
    'Crafted with precision for a luxurious experience.',
    'Perfect for special occasions or everyday elegance.',
    'Designed to captivate and impress.',
    'A stunning addition to your jewelry collection.',
    'Elegance and charm blended into one exquisite piece.',
    'An ideal gift for someone you cherish.',
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

const jewelryProducts = [
  {
    slug: 'gold-ring',
    media: {
      mainMedia: { image: { url: '/products/jewelry/product1.jpg' } },
      items: generateRandomImages(3),
    },
    price: 299.99,
    additionalInfoSections: [
      { title: 'Material', description: '18K Gold' },
      { title: 'Size', description: 'Adjustable' },
    ],
    desc: generateRandomDescription(),
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
      items: generateRandomImages(4),
    },
    price: 99.99,
    additionalInfoSections: [
      { title: 'Stone', description: 'Diamond' },
      { title: 'Length', description: '18 inches' },
    ],
    desc: generateRandomDescription(),
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
      items: generateRandomImages(3),
    },
    price: 149.99,
    additionalInfoSections: [
      { title: 'Material', description: 'Sterling Silver' },
    ],
    desc: generateRandomDescription(),
    isFeatured: false,
    isNew: true,
    stock: 30,
    tags: ['silver', 'bracelet', 'gift'],
  },
  {
    slug: 'pearl-earrings',
    media: {
      mainMedia: { image: { url: '/products/jewelry/product4.jpg' } },
      items: generateRandomImages(4),
    },
    price: 99.99,
    additionalInfoSections: [
      { title: 'Pearls', description: 'Freshwater' },
      { title: 'Style', description: 'Classic' },
    ],
    desc: generateRandomDescription(),
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
