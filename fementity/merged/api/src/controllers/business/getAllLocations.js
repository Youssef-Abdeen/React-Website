export const getAllLocations = async (req, res) => {
  const client = req.prisma;
  let allLocations;
  try {
    allLocations = await client.business.findMany({
      where: {},
      distinct: ['location'],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not retrieve locations' });
  }
  res.status(200).json(allLocations);
};
