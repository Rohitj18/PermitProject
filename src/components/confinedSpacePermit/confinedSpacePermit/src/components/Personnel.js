import Row from "./Row";
import styles from "./Personnel.module.css";
import DisplayRow from "./DisplayRow";
import Strip from "./Strip";
import { useState } from "react";
function Personnel({
  aaName1,
  aaName2,
  aaPhone1,
  aaPhone2,
  aeName1,
  aeName2,
  aePhone1,
  aePhone2,
  rtName1,
  rtName2,
  rtPhone1,
  rtPhone2,
  setaaName1,
  setaaName2,
  setaaPhone1,
  setaaPhone2,
  setaeName1,
  setaeName2,
  setaePhone1,
  setaePhone2,
  setrtName1,
  setrtName2,
  setrtPhone1,
  setrtPhone2,
}) {
  return (
    <>
      <Row>Part 2: Personnel</Row>
      <div className={styles.authorized}>
        <DisplayRow>Authorized Attendants</DisplayRow>
        <div className={`${styles.elements} ${styles.borderBottom}`}>
          <Strip>
            <label htmlFor="aaName1">Name:</label>
            <input
              id="aaName1"
              className={`${styles.borderAllAround}`}
              onChange={(e) => setaaName1(e.target.value)}
              value={aaName1}
              required
            ></input>
          </Strip>
          <Strip>
            <label htmlFor="aaPhone1">Phone:</label>
            <input
              id="aaPhone1"
              className={`${styles.borderAllAround}`}
              onChange={(e) => setaaPhone1(Number(e.target.value))}
              value={aaPhone1}
              required
            ></input>
          </Strip>
          <Strip>
            <label htmlFor="aaName2">Name:</label>
            <input
              id="aaName2"
              className={`${styles.borderAllAround}`}
              onChange={(e) => setaaName2(e.target.value)}
              value={aaName2}
              required
            ></input>
          </Strip>
          <Strip>
            <label htmlFor="aaPhone2">Phone:</label>
            <input
              id="aaPhone2"
              className={`${styles.borderAllAround}`}
              onChange={(e) => setaaPhone2(Number(e.target.value))}
              value={aaPhone2}
              required
            ></input>
          </Strip>
        </div>
      </div>
      <div className={styles.authorized}>
        <DisplayRow>Authorized Entrants</DisplayRow>
        <div className={`${styles.elements} ${styles.borderBottom}`}>
          <Strip>
            <label htmlFor="aeName1">Name:</label>
            <input
              id="aeName1"
              className={`${styles.borderAllAround}`}
              onChange={(e) => setaeName1(e.target.value)}
              value={aeName1}
              required
            ></input>
          </Strip>
          <Strip>
            <label htmlFor="aePhone1">Phone:</label>
            <input
              id="aePhone1"
              className={`${styles.borderAllAround}`}
              onChange={(e) => setaePhone1(Number(e.target.value))}
              value={aePhone1}
              required
            ></input>
          </Strip>
          <Strip>
            <label htmlFor="aeName2">Name:</label>
            <input
              id="aeName2"
              className={`${styles.borderAllAround}`}
              onChange={(e) => setaeName2(e.target.value)}
              value={aeName2}
              required
            ></input>
          </Strip>
          <Strip>
            <label htmlFor="aePhone2">Phone:</label>
            <input
              id="aePhone2"
              className={`${styles.borderAllAround}`}
              onChange={(e) => setaePhone2(Number(e.target.value))}
              value={aePhone2}
              required
            ></input>
          </Strip>
        </div>
      </div>
      <div className={styles.authorized}>
        <DisplayRow>Rescue Team</DisplayRow>
        <div className={`${styles.elements} ${styles.borderBottom}`}>
          <Strip>
            <label htmlFor="rtName1">Name:</label>
            <input
              id="rtName1"
              className={`${styles.borderAllAround}`}
              onChange={(e) => setrtName1(e.target.value)}
              value={rtName1}
              required
            ></input>
          </Strip>
          <Strip>
            <label htmlFor="rtPhone1">Phone:</label>
            <input
              id="rtPhone1"
              className={`${styles.borderAllAround}`}
              onChange={(e) => setrtPhone1(Number(e.target.value))}
              value={rtPhone1}
              required
            ></input>
          </Strip>
          <Strip>
            <label htmlFor="rtName2">Name:</label>
            <input
              id="rtName2"
              className={`${styles.borderAllAround}`}
              onChange={(e) => setrtName2(e.target.value)}
              value={rtName2}
              required
            ></input>
          </Strip>
          <Strip>
            <label htmlFor="rtPhone2">Phone:</label>
            <input
              id="rtPhone2"
              className={`${styles.borderAllAround}`}
              onChange={(e) => setrtPhone2(Number(e.target.value))}
              value={rtPhone2}
              required
            ></input>
          </Strip>
        </div>
      </div>
    </>
  );
}

export default Personnel;
