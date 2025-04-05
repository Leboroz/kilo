import styles from "./page.module.scss";
import Navbar from "./components/Navbar";
import Link from 'next/link'
import { getRequest } from "@/lib/request";


export default async function Home() {

  const zones = await getRequest('https://data.javin.io:5000/api/zones');

  if (!zones || !zones.data) {
    return <div>Failed to load data.</div>; // Handle the error case.
  }

  return (
    <div className={styles.page}>
      <header>
      </header>
      <main className={styles.main}>
        <ul className="list-group">
          {zones.data.map((zone, i) => {
            return <li className="list-group-item" key={zone.zone_id}><Link href={'zones/' + zone.zone_id}>{zone.name}</Link></li>
          })}
        </ul>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
