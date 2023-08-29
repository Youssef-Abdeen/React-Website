export const getAllServices = async (req, res) => {
  const client = req.prisma;
  let allServices;
  try {
    allServices = await client.business.findMany({
      where: {},
      distinct: ['service'],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not retrieve Services' });
  }
  res.status(200).json(allServices);
};
