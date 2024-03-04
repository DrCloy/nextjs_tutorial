import { Metadata } from "next";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata: Metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const json = await (await fetch(API_URL)).json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} id={movie.id} poster_path={movie.poster_path} />
      ))}
    </div>
  );
}
