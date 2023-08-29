export const getAllBusinesses = async (req, res) => {
  const client = req.prisma;
  let allBusinesses;
  try {
    allBusinesses = await client.business.findMany();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not retrieve businesses' });
  }
  res.status(200).json(allBusinesses);
};
