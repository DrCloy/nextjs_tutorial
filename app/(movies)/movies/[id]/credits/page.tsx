import { API_URL } from "../../../../(home)/page";
import Credit from "../../../../../components/credit";
import { IParams } from "../page";
import styles from "../../../../../styles/credits.module.css";

async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function Credits({ params: { id } }: IParams) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      {credits.map((credit) => (
        <Credit key={credit.id} profile_path={credit.profile_path} name={credit.name} character={credit.character} />
      ))}
    </div>
  );
}