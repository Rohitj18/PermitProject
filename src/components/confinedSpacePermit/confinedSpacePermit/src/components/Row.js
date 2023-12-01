import styles from "./Row.module.css";
function Row({ children }) {
  return (
    <div
      className={`${styles.border} ${styles.normalPadding} ${styles.background} ${styles.textColor}`}
    >
      {children}
    </div>
  );
}

export default Row;
