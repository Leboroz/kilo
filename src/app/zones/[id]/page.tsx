import { getRequest } from "@/lib/request";
import styles from "./page.module.scss";

export default async function Zone({ params }) {

  const awards = await getRequest('https://data.javin.io:5000/api/awards?zone=' + params.id);

  if (!awards || !awards.data) {
    return <div>Failed to load data.</div>; // Handle the error case.
  }


  return (
    <div className={styles.page}>
      <header>
      </header>
      <main className={styles.main}>
        hello {params.id}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
