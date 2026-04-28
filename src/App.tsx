import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { ChapterPage } from "./pages/ChapterPage";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chapter/:id" element={<ChapterPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <footer className={styles.footer}>
        <p>
          Mukhtaṣar al-Qudūrī &nbsp;·&nbsp;
          <span>Ḥanafī Fiqh</span> &nbsp;·&nbsp; Study Notes &nbsp;·&nbsp;
          Chapters on Commercial Transactions
        </p>
      </footer>
    </div>
  );
}
