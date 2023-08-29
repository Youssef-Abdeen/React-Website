export const getAllBusinesses = async (req, res) => {
  res.status(200).json([
    {
      businessName: 'Business',
    },
  ]);
};
