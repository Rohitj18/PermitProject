import styles from "./Strip.module.css";
function Strip({ children }) {
  return <div className={styles.display}>{children}</div>;
}

export default Strip;
