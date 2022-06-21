import clientPromise from "../lib/mongodb"

export default function Movies({ movies }) {
  return (
    <div>
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <h3>{movie.metacritic}</h3>
            <p>{movie.plot}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
    const client = await clientPromise
    const movies = await client.db("sample_mflix").collection("movies")
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray()
        .then()
    return {
        props: {
            movies: JSON.parse(JSON.stringify(movies))
        }
    }
}