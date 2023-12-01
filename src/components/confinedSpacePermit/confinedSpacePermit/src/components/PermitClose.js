import Row from "./Row";
import styles from "./PermitClose.module.css";

function PermitClose({ permitClose, setPermitClose }) {
  return (
    <>
      <Row>Part 8: Permit Close and Withdrawal of Permission</Row>
      <div className={`${styles.flex}  ${styles.border}`}>
        <div className={`${styles.border_right} ${styles.half}`}>
          <div className={styles.normalPadding}>
            Authorized Entrants exited. Permit closed, and permission withdrawn.
            <input
              type="radio"
              id="permitClose"
              required
              onClick={() => setPermitClose((preVal) => !preVal)}
              checked={permitClose}
              readOnly
            />
            <label htmlFor="permitClose">Yes</label>
          </div>
        </div>
        <div className={`${styles.half}`}>
          <div className={styles.normalPadding}>Signature of Supervisor:</div>
        </div>
      </div>
    </>
  );
}

export default PermitClose;
