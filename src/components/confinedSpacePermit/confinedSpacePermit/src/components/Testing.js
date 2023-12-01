import { useState } from "react";
import Row from "./Row";
import Table from "./Table";
import styles from "./Testing.module.css";
function Testing({ permitReclassify, setPermitReclassify }) {
  return (
    <>
      <Row>Part 6: Testing Record :</Row>
      <Table />
      <div className={styles.border}>
        <input
          type="radio"
          required
          onClick={() => setPermitReclassify((preVal) => !preVal)}
          checked={permitReclassify}
          readOnly
        />
        <label id="permitReclassify">
          This permit has been used to reclassify a permit-required space to a
          non-permit required space for the duration of the single entry.
        </label>
      </div>
    </>
  );
}

export default Testing;
