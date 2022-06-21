import clientPromise from "../../lib/mongodb"

export default async (req, res) => {
    const client = await clientPromise
    const movies = await client.db("sample_mflix").collection("movies")
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray()
        .then();
    return res.json(movies)
}