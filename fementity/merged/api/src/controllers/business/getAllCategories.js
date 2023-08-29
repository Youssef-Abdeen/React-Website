export const getAllCategories = async (req, res) => {
  const client = req.prisma;
  let allCategories;
  try {
    allCategories = await client.business.findMany({
      where: {},
      distinct: ['business_category'],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not retrieve Categories' });
  }
  res.status(200).json(allCategories);
};
