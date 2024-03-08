import Link from "next/link";
import styles from "../styles/movie-info.module.css";
import { API_URL } from "./constants";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} className={styles.poster} alt={movie.title} />
      <div className={styles.info}>
        <h2 className={styles.title}>
          {movie.title}
          {movie.adult ? " 🔞 " : null}
        </h2>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        {movie.genres ? (
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        ) : null}
        <p>{movie.overview}</p>
        {movie.homepage === "" ? null : (
          <a href={movie.homepage} target="_blank">
            Homepage &rarr;
          </a>
        )}
        <div className={styles.button}>
          <Link href={`/movies/${id}/credits`}>Credits</Link>
          <Link href={`/movies/${id}/providers`}>Providers</Link>
          <Link href={`/movies/${id}/similar`}>Similar</Link>
        </div>
      </div>
    </div>
  );
}
