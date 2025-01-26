import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Welcome to JSON Web Visualiser</h1>
      <p className={styles.description}>
        This is a simple web app that helps you visualise your JSON data in a tree structure with the ability to modify and control each parameter to your liking.
      </p>

      <footer className={styles.footer}>
        <p>Created by NotKeira</p>
      </footer>

    </>
  );
}
