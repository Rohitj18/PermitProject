import styles from "./BasicInfo.module.css";
import DisplayRow from "./DisplayRow";
import Row from "./Row";
import Strip from "./Strip";
import ReactDatePicker from "react-datepicker";

function BasicInfo({
  activityNotes,
  entrySpace,
  personInCharge2,
  permitNo,
  jobLocation,
  dateStart,
  dateEnd,
  timeStart,
  timeEnd,
  setActivityNotes,
  setEntrySpace,
  setPersonInCharge2,
  setPermitNo,
  setJobLocation,
  setDateStart,
  setDateEnd,
  setTimeStart,
  setTimeEnd,
}) {
  return (
    <div>
      <Row>Part 1:Basic Information</Row>
      <div className={styles.activity}>
        <div
          className={`${styles.header} ${styles.space} ${styles.border} ${styles.size}`}
        >
          <b>Activity Description</b>
        </div>
        <div className={`${styles.join} ${styles.borderBottom}`}>
          <textarea
            className={styles.textarea}
            required
            id="activityNotes"
            onChange={(e) => setActivityNotes(e.target.value)}
            value={activityNotes}
          ></textarea>
        </div>
      </div>
      <div className={styles.entrySpaceAndPersonInCharge}>
        <div className={`${styles.border} ${styles.entrySpace}`}>
          {/* <Input styles={styles.inputEntry}>Entry Space</Input> */}
          <label htmlFor="entrySpace">Entry Space:</label>
          <input
            className={`${styles.width} ${styles.inputMargin} ${styles.inputEntry} ${styles.borderAllAround}`}
            required
            id="entrySpace"
            onChange={(e) => setEntrySpace(e.target.value)}
            value={entrySpace}
          />
        </div>
        <div className={`${styles.border} ${styles.personInCharge}`}>
          {/* <Input styles={styles.inputPerson}>Person in Charge</Input> */}
          <label htmlFor="personInCharge2">Person in Charge:</label>
          <input
            className={`${styles.width} ${styles.inputMargin} ${styles.inputPerson} ${styles.borderAllAround}`}
            required
            id="personInCharge2"
            onChange={(e) => setPersonInCharge2(e.target.value)}
            value={personInCharge2}
          />
        </div>
      </div>
      <div className={styles.entrySpaceAndPersonInCharge}>
        <div className={`${styles.border} ${styles.entrySpace}`}>
          {/* <Input styles={styles.inputEntry}>Permit No. (if Applicable)</Input> */}
          <label htmlFor="permitNo">Permit No. (if Applicable)</label>
          <input
            className={`${styles.width} ${styles.inputMargin} ${styles.inputPerson} ${styles.borderAllAround}`}
            required
            id="permitNo"
            onChange={(e) => setPermitNo(e.target.value)}
            value={permitNo}
          />
        </div>
        <div className={`${styles.border} ${styles.personInCharge}`}>
          {/* <Input styles={styles.inputPerson}>Specific Job Location</Input> */}
          <label htmlFor="jobLocation">Specific Job Location</label>
          <input
            className={`${styles.width} ${styles.inputMargin} ${styles.inputPerson} ${styles.borderAllAround}`}
            required
            id="jobLocation"
            onChange={(e) => setJobLocation(e.target.value)}
            value={jobLocation}
          />
        </div>
      </div>
      <div className={styles.duration}>
        <DisplayRow>Duration of Permit</DisplayRow>
        <div className={`${styles.elements} ${styles.border}`}>
          <Strip>
            <label htmlFor="dateStart">Date Start:</label>
            <ReactDatePicker
              id="date"
              className={styles.inputMargin}
              onChange={(dateStart) => setDateStart(dateStart)}
              selected={new Date(dateStart)}
              dateFormat="dd/MM/yyyy"
            />
          </Strip>
          <Strip>
            <label htmlFor="dateEnd">Date End:</label>
            <ReactDatePicker
              id="dateEnd"
              className={styles.inputMargin}
              onChange={(dateEnd) => setDateEnd(dateEnd)}
              selected={new Date(dateEnd)}
              dateFormat="dd/MM/yyyy"
            />
          </Strip>
          <Strip>
            Time Start: <input type="text" />
          </Strip>
          <Strip>
            Time End: <input type="text" />
          </Strip>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
