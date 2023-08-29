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
}

seed();
