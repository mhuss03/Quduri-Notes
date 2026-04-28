import { Link, useParams, useNavigate } from "react-router-dom";
import { chapters } from "../data/chapters";
import { useTheme } from "../hooks/useTheme";
import styles from "./Navbar.module.css";
import { useState } from "react";

export function Navbar() {
  const { id } = useParams<{ id: string }>();
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoArabic}>القدوري</span>
        <span className={styles.logoText}>
          Qudūrī <span className={styles.logoSub}>Study Notes</span>
        </span>
      </Link>

      {/* desktop nav */}
      <nav className={styles.pills} aria-label="Chapters">
        {chapters.map((ch) => (
          <Link
            key={ch.id}
            to={`/chapter/${ch.id}`}
            className={`${styles.pill} ${id === ch.id ? styles.active : ""}`}
          >
            {ch.title}
          </Link>
        ))}
      </nav>

      <div className={styles.actions}>
        <button
          className={styles.themeBtn}
          onClick={toggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "☀️" : "🌙"}
          <span className={styles.themeBtnLabel}>
            {theme === "dark" ? "Light" : "Dark"}
          </span>
        </button>

        {/* hamburger for mobile */}
        {/* <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Open chapter menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button> */}
      </div>

      {/* mobile drawer */}
      {menuOpen && (
        <div
          className={styles.drawer}
          role="dialog"
          aria-label="Chapter navigation"
        >
          <div className={styles.drawerHeader}>
            <span>Chapters</span>
            <button
              onClick={() => setMenuOpen(false)}
              className={styles.closeBtn}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          {chapters.map((ch) => (
            <button
              key={ch.id}
              className={`${styles.drawerItem} ${id === ch.id ? styles.drawerActive : ""}`}
              onClick={() => {
                navigate(`/chapter/${ch.id}`);
                setMenuOpen(false);
              }}
            >
              <span className={styles.drawerNum}>{ch.number}</span>
              <span>
                <strong>{ch.title}</strong>
                <small>{ch.arabicTitle}</small>
              </span>
            </button>
          ))}
        </div>
      )}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
