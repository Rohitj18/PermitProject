import { useState } from "react";
import styles from "./EquipmentRadioButtons.module.css";
function EquipmentRadioButtons({
  children,
  gasMonitor,
  hoist,
  entry,
  electric,
  classElement,
  safety,
  communication,
  protective,
  ventSystem,
  setGasMonitor,
  setHoist,
  setEntry,
  setElectric,
  setClassElement,
  setSafety,
  setCommunication,
  setProtective,
  setVentSystem,
}) {
  return (
    <div className={styles.paddingAndGap}>
      <div className={styles.margin}>
        <b>{children}</b>
      </div>
      <div className={styles.margin}>
        <label>Direct reading gas monitor (tested)</label>
        <span>
          <input
            type="radio"
            id="gasMonitor"
            onClick={() =>
              gasMonitor === "NA"
                ? setGasMonitor("Yes")
                : gasMonitor === "Yes"
                ? setGasMonitor("NA")
                : setGasMonitor("Yes")
            }
            checked={gasMonitor === "Yes" ? true : false}
            readOnly
          />
          <label htmlFor="gasMonitor">Yes</label>
          <input
            type="radio"
            id="gasMonitor"
            name="gasMonitor"
            required
            onClick={() =>
              gasMonitor === "NA"
                ? setGasMonitor("No")
                : gasMonitor === "Yes"
                ? setGasMonitor("No")
                : setGasMonitor("NA")
            }
            checked={gasMonitor === "No" ? true : false}
            readOnly
          />
          <label htmlFor="gasMonitor">No</label>
          <input
            type="radio"
            id="gasMonitor"
            name="gasMonitor"
            required
            onClick={() =>
              gasMonitor === "Yes"
                ? setGasMonitor("NA")
                : gasMonitor === "NA"
                ? setGasMonitor("NULL")
                : setGasMonitor("NA")
            }
            checked={gasMonitor === "NA" ? true : false}
            readOnly
          />
          <label htmlFor="gasMonitor">N/A</label>
        </span>
      </div>
      <div className={styles.margin}>
        <label>Hoisting equipment</label>
        <span>
          <input
            type="radio"
            id="hoist"
            onClick={() =>
              hoist === "NA"
                ? setHoist("Yes")
                : hoist === "Yes"
                ? setHoist("NA")
                : setHoist("Yes")
            }
            checked={hoist === "Yes" ? true : false}
            readOnly
          />
          <label htmlFor="hoist">Yes</label>
          <input
            type="radio"
            id="hoist"
            name="hoist"
            required
            onClick={() =>
              hoist === "NA"
                ? setHoist("No")
                : hoist === "Yes"
                ? setHoist("No")
                : setHoist("NA")
            }
            checked={hoist === "No" ? true : false}
            readOnly
          />
          <label htmlFor="hoist">No</label>
          <input
            type="radio"
            id="hoist"
            name="hoist"
            required
            onClick={() =>
              hoist === "Yes"
                ? setHoist("NA")
                : hoist === "NA"
                ? setHoist("NULL")
                : setHoist("NA")
            }
            checked={hoist === "NA" ? true : false}
            readOnly
          />
          <label htmlFor="hoist">N/A</label>
        </span>
      </div>
      <div className={styles.margin}>
        <label>SCBAs for entry and standby persons</label>
        <span>
          <input
            type="radio"
            id="entry"
            onClick={() =>
              entry === "NA"
                ? setEntry("Yes")
                : entry === "Yes"
                ? setEntry("NA")
                : setEntry("Yes")
            }
            checked={entry === "Yes" ? true : false}
            readOnly
          />
          <label htmlFor="entry">Yes</label>
          <input
            type="radio"
            id="entry"
            name="entry"
            required
            onClick={() =>
              entry === "NA"
                ? setEntry("No")
                : entry === "Yes"
                ? setEntry("No")
                : setEntry("NA")
            }
            checked={entry === "No" ? true : false}
            readOnly
          />
          <label htmlFor="entry">No</label>
          <input
            type="radio"
            id="entry"
            name="entry"
            required
            onClick={() =>
              entry === "Yes"
                ? setEntry("NA")
                : entry === "NA"
                ? setEntry("NULL")
                : setEntry("NA")
            }
            checked={entry === "NA" ? true : false}
            readOnly
          />
          <label htmlFor="entry">N/A</label>
        </span>
      </div>
      <div className={styles.margin}>
        <label>All electric equipment listed</label>
        <span>
          <input
            type="radio"
            id="electric"
            onClick={() =>
              electric === "NA"
                ? setElectric("Yes")
                : electric === "Yes"
                ? setElectric("NA")
                : setElectric("Yes")
            }
            checked={electric === "Yes" ? true : false}
            readOnly
          />
          <label htmlFor="electric">Yes</label>
          <input
            type="radio"
            id="electric"
            name="electric"
            required
            onClick={() =>
              electric === "NA"
                ? setElectric("No")
                : electric === "Yes"
                ? setElectric("No")
                : setElectric("NA")
            }
            checked={electric === "No" ? true : false}
            readOnly
          />
          <label htmlFor="electric">No</label>
          <input
            type="radio"
            id="electric"
            name="electric"
            required
            onClick={() =>
              electric === "Yes"
                ? setElectric("NA")
                : electric === "NA"
                ? setElectric("NULL")
                : setElectric("NA")
            }
            checked={electric === "NA" ? true : false}
            readOnly
          />
          <label htmlFor="electric">N/A</label>
        </span>
      </div>
      <div className={styles.margin}>
        <label>Class I, Div. I, Group D, and non-sparking tools</label>
        <span>
          <input
            type="radio"
            id="classElement"
            onClick={() =>
              classElement === "NA"
                ? setClassElement("Yes")
                : classElement === "Yes"
                ? setClassElement("NA")
                : setClassElement("Yes")
            }
            checked={classElement === "Yes" ? true : false}
            readOnly
          />
          <label htmlFor="classElement">Yes</label>
          <input
            type="radio"
            id="classElement"
            name="classElement"
            required
            onClick={() =>
              classElement === "NA"
                ? setClassElement("No")
                : classElement === "Yes"
                ? setClassElement("No")
                : setClassElement("NA")
            }
            checked={classElement === "No" ? true : false}
            readOnly
          />
          <label htmlFor="classElement">No</label>
          <input
            type="radio"
            id="classElement"
            name="classElement"
            required
            onClick={() =>
              classElement === "Yes"
                ? setClassElement("NA")
                : classElement === "NA"
                ? setClassElement("NULL")
                : setClassElement("NA")
            }
            checked={classElement === "NA" ? true : false}
            readOnly
          />
          <label htmlFor="classElement">N/A</label>
        </span>
      </div>
      <div className={styles.margin}>
        <label>
          Safety harnesses and lifelines for entry and standby persons
        </label>
        <span>
          <input
            type="radio"
            id="safety"
            onClick={() =>
              safety === "NA"
                ? setSafety("Yes")
                : safety === "Yes"
                ? setSafety("NA")
                : setSafety("Yes")
            }
            checked={safety === "Yes" ? true : false}
            readOnly
          />
          <label htmlFor="safety">Yes</label>
          <input
            type="radio"
            id="safety"
            name="safety"
            required
            onClick={() =>
              safety === "NA"
                ? setSafety("No")
                : safety === "Yes"
                ? setSafety("No")
                : setSafety("NA")
            }
            checked={safety === "No" ? true : false}
            readOnly
          />
          <label htmlFor="safety">No</label>
          <input
            type="radio"
            id="safety"
            name="safety"
            required
            onClick={() =>
              safety === "Yes"
                ? setSafety("NA")
                : safety === "NA"
                ? setSafety("NULL")
                : setSafety("NA")
            }
            checked={safety === "NA" ? true : false}
            readOnly
          />
          <label htmlFor="safety">N/A</label>
        </span>
      </div>
      <div className={styles.margin}>
        <label>Powered communications</label>
        <span>
          <input
            type="radio"
            id="communication"
            onClick={() =>
              communication === "NA"
                ? setCommunication("Yes")
                : communication === "Yes"
                ? setCommunication("NA")
                : setCommunication("Yes")
            }
            checked={communication === "Yes" ? true : false}
            readOnly
          />
          <label htmlFor="communication">Yes</label>
          <input
            type="radio"
            id="communication"
            name="communication"
            required
            onClick={() =>
              communication === "NA"
                ? setCommunication("No")
                : communication === "Yes"
                ? setCommunication("No")
                : setCommunication("NA")
            }
            checked={communication === "No" ? true : false}
            readOnly
          />
          <label htmlFor="communication">No</label>
          <input
            type="radio"
            id="communication"
            name="communication"
            required
            onClick={() =>
              communication === "Yes"
                ? setCommunication("NA")
                : communication === "NA"
                ? setCommunication("NULL")
                : setCommunication("NA")
            }
            checked={communication === "NA" ? true : false}
            readOnly
          />
          <label htmlFor="communication">N/A</label>
        </span>
      </div>
      <div className={styles.margin}>
        <label>Protective clothing</label>
        <span>
          <input
            type="radio"
            id="protective"
            onClick={() =>
              protective === "NA"
                ? setProtective("Yes")
                : protective === "Yes"
                ? setProtective("NA")
                : setProtective("Yes")
            }
            checked={protective === "Yes" ? true : false}
            readOnly
          />
          <label htmlFor="protective">Yes</label>
          <input
            type="radio"
            id="protective"
            name="protective"
            required
            onClick={() =>
              protective === "NA"
                ? setProtective("No")
                : protective === "Yes"
                ? setProtective("No")
                : setProtective("NA")
            }
            checked={protective === "No" ? true : false}
            readOnly
          />
          <label htmlFor="protective">No</label>
          <input
            type="radio"
            id="protective"
            name="protective"
            required
            onClick={() =>
              protective === "Yes"
                ? setProtective("NA")
                : protective === "NA"
                ? setProtective("NULL")
                : setProtective("NA")
            }
            checked={protective === "NA" ? true : false}
            readOnly
          />
          <label htmlFor="protective">N/A</label>
        </span>
      </div>
      <div className={styles.margin}>
        <label>Ventilation system</label>
        <span>
          <input
            type="radio"
            id="ventSystem"
            onClick={() =>
              ventSystem === "NA"
                ? setVentSystem("Yes")
                : ventSystem === "Yes"
                ? setVentSystem("NA")
                : setVentSystem("Yes")
            }
            checked={ventSystem === "Yes" ? true : false}
            readOnly
          />
          <label htmlFor="ventSystem">Yes</label>
          <input
            type="radio"
            id="ventSystem"
            name="ventSystem"
            required
            onClick={() =>
              ventSystem === "NA"
                ? setVentSystem("No")
                : ventSystem === "Yes"
                ? setVentSystem("No")
                : setVentSystem("NA")
            }
            checked={ventSystem === "No" ? true : false}
            readOnly
          />
          <label htmlFor="ventSystem">No</label>
          <input
            type="radio"
            id="ventSystem"
            name="ventSystem"
            required
            onClick={() =>
              ventSystem === "Yes"
                ? setVentSystem("NA")
                : ventSystem === "NA"
                ? setVentSystem("NULL")
                : setVentSystem("NA")
            }
            checked={ventSystem === "NA" ? true : false}
            readOnly
          />
          <label htmlFor="ventSystem">N/A</label>
        </span>
      </div>
    </div>
  );
}

export default EquipmentRadioButtons;
