import styles from "./page.module.scss";
import Link from 'next/link'
import { ListOfApplications } from "../components/ListOfApplications";
import { getRequest } from '@/lib/request';

export default async function Applications() {
  const applications = await getRequest('https://data.javin.io:5000/api/applications');
  const zones = await getRequest('https://data.javin.io:5000/api/zones');

  if (!applications || !applications.data) {
    return <div>loading</div>; // Handle the error case.
  }

  return (
    <div className={styles.page}>
      <header>
      </header>
      <main className={styles.main}>
        <ListOfApplications apps={applications} zones={zones} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
