export const getAllArticles = async (req, res) => {
    const client = req.prisma;
    let allArticles;
    try {
        allArticles = await client.article.findMany();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    res.status(200).json(allArticles);
};