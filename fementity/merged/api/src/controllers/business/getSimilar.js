export const getSimilar = async (req, res) => {
  const client = req.prisma;
  let allServices;
  let term = req.query.term;
  try {
    allServices = await client.$queryRawUnsafe(
      'SELECT * FROM "Business" WHERE (business_name ILIKE $1 OR location ILIKE $2 OR description ILIKE $3 or business_category ILIKE $4 or service ILIKE $5)',
      `%${term}%`,
      `%${term}%`,
      `%${term}%`,
      `%${term}%`,
      `%${term}%`,
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
  res.status(200).json(allServices);
};
