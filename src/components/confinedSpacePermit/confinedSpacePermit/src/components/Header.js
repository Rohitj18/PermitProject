import styles from "./Header.module.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Header({
  departmentName,
  personInCharge1,
  date,
  setDepartmentName,
  setPersonInCharge1,
  setDate,
}) {
  return (
    <div className={`${styles.header} ${styles.header_border}`}>
      <div
        className={`${styles.half} ${styles.border_right} ${styles.padding}`}
      >
        <label htmlFor="departmentName">Department/Area:</label>
        <input
          type="text"
          className={`${styles.inputMargin} ${styles.borderAllAround}`}
          id="departmentName"
          onChange={(e) => setDepartmentName(e.target.value)}
          value={departmentName}
          required
        />
      </div>
      <div
        className={`${styles.half} ${styles.border_right} ${styles.padding}`}
      >
        <label htmlFor="personInCharge1">Person in Charge:</label>

        <input
          type="text"
          className={`${styles.inputMargin} ${styles.borderAllAround}`}
          id="personInCharge1"
          onChange={(e) => setPersonInCharge1(e.target.value)}
          value={personInCharge1}
          required
        />
      </div>
      <div className={`${styles.half} ${styles.padding}`}>
        <label htmlFor="date">Date:</label>
        <ReactDatePicker
          id="date"
          className={`${styles.inputMargin} ${styles.borderAllAround}`}
          onChange={(date) => setDate(date)}
          selected={new Date(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>
    </div>
  );
}

export default Header;
