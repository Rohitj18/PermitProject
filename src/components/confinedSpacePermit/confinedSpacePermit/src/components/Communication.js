import styles from "./Communication.module.css";
import Row from "./Row";
function Communication() {
  return (
    <>
      <Row>Part 4: Communication Procedures</Row>
      <div className={`${styles.flex}  ${styles.border}`}>
        <div className={`${styles.border_right} ${styles.half}`}>
          <div className={styles.normalPadding}>
            <b>Emergency Contact:</b> Initial rescue plan as per facility’s
            procedures
          </div>
        </div>
        <div className={`${styles.half}`}>
          <div className={styles.normalPadding}>
            <b>Attendant or Authorized Entrant:</b> Maintain visual contact.
          </div>
        </div>
      </div>
    </>
  );
}

export default Communication;
