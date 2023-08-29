import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function seed() {
  await db.business.create({
    data: {
      business_name: 'Business Name 1',
      business_slug: 'business-name-1',
      business_category: 'Business Category',
      service: 'Service',
      location: 'Location',
      workshops: true,
      podcast: true,
      course_referral: true,
      social_media_handle: '@handle',
      giveaway_interest: false,
      website: 'www.google.ca',
      description: 'description',
    },
  });

  await db.business.create({
    data: {
      business_name: 'Business Name 2',
      business_slug: 'business-name-2',
      business_category: 'Business Category',
      service: 'Service',
      location: 'Location',
      workshops: true,
      podcast: true,
      course_referral: true,
      social_media_handle: '@handle',
      giveaway_interest: false,
      website: 'www.google.ca',
      description: 'description',
    },
  });
  await db.article.create({
    data: {
      title: 'Article Title 1',
      slug: 'article-title-1',
      content: 'Article Content 1',
      published: true,
      published_at: new Date(),
      author_id: 'author-id-1',
      description: 'description',
    },
  });

  await db.article.create({
    data: {
      title: 'Article Title 2',
      slug: 'article-title-2',
      content: 'Article Content 2',
      published: true,
      published_at: new Date(),
      author_id: 'author-id-2',
      description: 'description',
    },
  });

  await db.article.create({
    data: {
      title: 'Article Title 3',
      slug: 'article-title-3',
      content: 'Article Content 3',
      published: true,
      published_at: new Date(),
      author_id: 'author-id-3',
      description: 'description',
    },
  });

}

seed();
