import styles from "./DisplayRow.module.css";
function DisplayRow({ children }) {
  return (
    <div className={styles.display}>
      <div>{children}</div>
    </div>
  );
}

export default DisplayRow;
