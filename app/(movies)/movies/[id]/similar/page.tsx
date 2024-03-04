import { getMovie } from "../../../../../components/movie-info";
import { IParams } from "../page";

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);

  return {
    title: `${movie.title} - Similar`,
  };
}

export default function Similar() {
  return <div>Similar</div>;
}
