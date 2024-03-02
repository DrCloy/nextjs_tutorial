import styles from "../styles/credit-info.module.css";

interface ICreditProps {
  profile_path: string;
  name: string;
  character: string;
}

export default function Credit({ profile_path, name, character }: ICreditProps) {
  return (
    <div className={styles.credit}>
      <img src={profile_path} alt={name} />
      <h3>{name}</h3>
      <h5>{character}</h5>
    </div>
  );
}
