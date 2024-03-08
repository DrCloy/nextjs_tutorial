import Country from "@components/country";
import { getMovie } from "@components/movie-info";
import { IParams } from "../page";
import styles from "../../../../../styles/countries.module.css";

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);

  return {
    title: `${movie.title} - Providers`,
  };
}

async function getProviders(id: string) {
  const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}/providers`);
  return response.json();
}

export default async function Providers({ params: { id } }: IParams) {
  const providers = await getProviders(id);
  return (
    <div className={styles.container}>
      {Object.keys(providers).map((provider) => (
        <Country key={provider} country={provider} link={providers[provider].link} />
      ))}
    </div>
  );
}
