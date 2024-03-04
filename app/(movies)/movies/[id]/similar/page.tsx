import Movie from "../../../../../components/movie";
import { getMovie } from "../../../../../components/movie-info";
import { IParams } from "../page";
import styles from "../../../../../styles/similars.module.css";
import { API_URL } from "../../../../constants";

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);

  return {
    title: `${movie.title} - Similar`,
  };
}

async function getSimilarMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);

  return response.json();
}

export default async function Similar({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  const similarMovie = await getSimilarMovie(id);
  return (
    <div className={styles.container}>
      <div className={styles.info}>{`Similar Movie - ${movie.title}`}</div>
      <hr />
      <div className={styles.movie}>
        {similarMovie.map((movie) => (
          <Movie key={movie.id} title={movie.title} id={movie.id} poster_path={movie.poster_path} />
        ))}
      </div>
    </div>
  );
}
