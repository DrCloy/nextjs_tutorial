import Link from "next/link";
import styles from "../styles/country-info.module.css";

interface CountryProps {
  country: string;
  link: string;
}

async function getCountry(country: string) {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${country}`);
  return response.json();
}

export default async function Country({ country, link }: CountryProps) {
  const countryData = (await getCountry(country))[0];

  return (
    <Link prefetch href={link} target="_blank">
      <div>
        <div className={styles.flag}>
          <img src={countryData.flags.svg} alt={countryData.name.png} />
        </div>
        <div className={styles.name}>
          <h2>{countryData.name.common}</h2>
        </div>
      </div>
    </Link>
  );
}
