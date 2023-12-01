import DisplayRow from "./DisplayRow";
import Row from "./Row";
import styles from "./Organization.module.css";
import Strip from "./Strip";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
function Organization({
  precaution,
  ppName,
  ppSignature,
  ppDate,
  ppTime,
  paName,
  paSignature,
  paDate,
  paTime,
  rhName,
  rhSignature,
  rhDate,
  rhTime,
  setPrecaution,
  setppName,
  setppSignature,
  setppDate,
  setppTime,
  setpaName,
  setpaSignature,
  setpaDate,
  setpaTime,
  setrhName,
  setrhSignature,
  setrhDate,
  setrhTime,
}) {
  return (
    <div>
      <Row>Part 7: Organization of Entry Supervisors </Row>
      <div className={`${styles.borderRow} ${styles.normalPadding}`}>
        <input
          type="radio"
          onClick={() => setPrecaution((preVal) => !preVal)}
          checked={precaution}
          readOnly
          required
        />
        I certify that all required precautions have been taken and necessary
        equipment is provided for safe entry, work, and rescue in this confined
        space.
      </div>
      <div className={`${styles.authorized}`}>
        <DisplayRow>Permit Prepared By</DisplayRow>
        <div className={styles.border}>
          <label htmlFor="ppName">Name:</label>
          <input
            className={`${styles.borderAllAround}`}
            type="text"
            id="ppname"
            required
            onChange={(e) => setppName(e.target.value)}
            value={ppName}
          />
        </div>
        <div className={styles.border}>
          <label htmlFor="ppSignature">Signature:</label>
          {/* <input
            type="text"
            id="ppSignature"
            required
            onChange={(e) => setppSignature(e.target.value)}
            value={ppSignature}
          /> */}
        </div>
        <div className={styles.border}>
          <label htmlFor="ppDate">Date:</label>
          <ReactDatePicker
            type="date"
            id="ppDate"
            required
            className={`${styles.borderAllAround}`}
            onChange={(ppDate) => setppDate(ppDate)}
            selected={new Date(ppDate)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className={styles.border}>
          <label htmlFor="ppTime">Time:</label>
          <input
            type="text"
            id="ppTime"
            className={`${styles.borderAllAround}`}
            required
            onChange={(e) => setppTime(e.target.value)}
            value={ppTime}
          />
        </div>
      </div>
      <div className={`${styles.authorized}`}>
        <DisplayRow>
          Permit Approved By (qualified confined Space Assessor)- Maint head
        </DisplayRow>

        <div className={styles.border}>
          <label htmlFor="paName">Name:</label>
          <input
            type="text"
            id="paName"
            className={`${styles.borderAllAround}`}
            required
            onChange={(e) => setpaName(e.target.value)}
            value={paName}
          />
        </div>
        <div className={styles.border}>
          <label htmlFor="paSignature">Signature:</label>
          {/* <input
            type="text"
            id="paSignature"
            required
            onChange={(e) => setpaSignature(e.target.value)}
            value={paSignature}
          /> */}
        </div>
        <div className={styles.border}>
          <label htmlFor="paDate">Date:</label>
          <ReactDatePicker
            type="date"
            id="paDate"
            required
            className={`${styles.borderAllAround}`}
            onChange={(paDate) => setpaDate(paDate)}
            selected={new Date(paDate)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className={styles.border}>
          <label htmlFor="paTime">Time:</label>
          <input
            type="text"
            id="paTime"
            className={`${styles.borderAllAround}`}
            required
            onChange={(e) => setpaTime(e.target.value)}
            value={paTime}
          />
        </div>
      </div>
      <div className={`${styles.authorized}`}>
        <DisplayRow>Reviewed by – HSE head</DisplayRow>

        <div className={styles.border}>
          <label htmlFor="rhName">Name:</label>
          <input
            type="text"
            id="rhName"
            className={`${styles.borderAllAround}`}
            required
            onChange={(e) => setrhName(e.target.value)}
            value={rhName}
          />
        </div>
        <div className={styles.border}>
          <label htmlFor="rhSignature">Signature:</label>
          {/* <input
            type="text"
            id="rhSignature"
            required
            onChange={(e) => setrhSignature(e.target.value)}
            value={rhSignature}
          /> */}
        </div>
        <div className={styles.border}>
          <label htmlFor="rhDate">Date:</label>
          <ReactDatePicker
            type="date"
            id="rhDate"
            className={`${styles.borderAllAround}`}
            required
            onChange={(rhDate) => setrhDate(rhDate)}
            selected={new Date(rhDate)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className={styles.border}>
          <label htmlFor="rhTime">Time:</label>
          <input
            type="text"
            id="rhTime"
            className={`${styles.borderAllAround}`}
            required
            onChange={(e) => setrhTime(e.target.value)}
            value={rhTime}
          />
        </div>
      </div>
    </div>
  );
}

export default Organization;
