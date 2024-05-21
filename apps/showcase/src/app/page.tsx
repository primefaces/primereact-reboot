import styles from "./page.module.css";
import InputText from "@primereact/components/InputText";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          PrimeReact Reboot Next&nbsp;
          <InputText />
        </p>
      </div>
    </main>
  );
}
