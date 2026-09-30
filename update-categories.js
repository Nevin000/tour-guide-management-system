const { PrismaClient } = require('./ceylon-vidu-tours/src/generated/client');
require('dotenv').config({ path: './ceylon-vidu-tours/.env' });
require('dotenv').config({ path: './ceylon-vidu-tours/.env.local' });

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL
});

async function main() {
  console.log('Connected to DB URL:', process.env.DATABASE_URL ? 'URL found' : 'URL NOT found');
  const tours = await prisma.tourPackage.findMany();
  console.log(`Found ${tours.length} existing tour packages.`);

  for (const tour of tours) {
    let newCategory = tour.category;
    const catLower = (tour.category || '').toLowerCase();
    const titleLower = (tour.title || '').toLowerCase();
    const durLower = (tour.duration || '').toLowerCase();

    if (
      catLower.includes('day') ||
      catLower.includes('excursion') ||
      titleLower.includes('one day') ||
      titleLower.includes('day tour') ||
      durLower.includes('1 day') ||
      tour.daysCount === 1
    ) {
      newCategory = 'one day tour';
    } else {
      newCategory = 'round tour';
    }

    if (newCategory !== tour.category) {
      console.log(`Updating "${tour.title}": "${tour.category}" -> "${newCategory}"`);
      await prisma.tourPackage.update({
        where: { id: tour.id },
        data: { category: newCategory }
      });
    } else {
      console.log(`Tour "${tour.title}" already has category "${tour.category}"`);
    }
  }

  console.log('Category updates completed.');
}

main()
  .catch((err) => {
    console.error('Error updating categories:', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
