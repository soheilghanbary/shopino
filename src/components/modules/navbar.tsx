import styles from "@/lib/sass/navbar.module.scss";
import { useTheme } from "next-themes";
export default function Navbar() {
  return (
    <header className={styles["container"]}>
      <nav className={styles["navbar"]}>
        <div className={styles["logo"]}>
          <img loading="lazy" width={36} height={36} alt={'logo'} src="/logo.svg" />
          <h3>SOLink</h3>
        </div>
        <ul className={styles["menu"]}>
          <li>Home</li>
          <li>Search</li>
          <li>About</li>
          <li>Register</li>
          <li>FAQ</li>
        </ul>
        <NavButton />
      </nav>
    </header>
  );
}

const NavButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={styles["btn"]}
    >
      Create Account
    </button>
  );
};
