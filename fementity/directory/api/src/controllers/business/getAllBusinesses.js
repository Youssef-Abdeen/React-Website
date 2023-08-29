export const getAllBusinesses = async (req, res) => {
  const client = req.prisma;
  let allBusinesses;
  try {
    allBusinesses = await client.business.findMany();
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve businesses' });
  }
  res.status(200).json(allBusinesses);
};

export const getAllLocations = async (req, res) => {
  const client = req.prisma;
  let allLocations;
  try {
    allLocations = await client.business.findMany({
      where: {},
      distinct: ['location'],
    });
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve locations' });
  }
  res.status(200).json(allLocations);
};

export const getAllCategories = async (req, res) => {
  const client = req.prisma;
  let allCategories;
  try {
    allCategories = await client.business.findMany({
      where: {},
      distinct: ['business_category'],
    });
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve Categories' });
  }
  res.status(200).json(allCategories);
};

export const getAllServices = async (req, res) => {
  const client = req.prisma;
  let allServices;
  try {
    allServices = await client.business.findMany({
      where: {},
      distinct: ['service'],
    });
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve Services' });
  }
  res.status(200).json(allServices);
};

export const getSimilar = async (req, res) => {
  const client = req.prisma;
  let allServices;
  let term = req.query.term;
  try {
    allServices =  await client.$queryRawUnsafe(
      'SELECT * FROM "Business" WHERE (business_name ILIKE $1 OR location ILIKE $2 OR description ILIKE $3 or business_category ILIKE $4 or service ILIKE $5)',
      `%${term}%`,
      `%${term}%`,
      `%${term}%`,
      `%${term}%`,
      `%${term}%`
    )
  } catch (error) {
    res.status(500).json({ error: error});
  }
  res.status(200).json(allServices);
};
