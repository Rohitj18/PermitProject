import RadioButtons from "./RadioButtons";
import Row from "./Row";
import VentilationRadioButtons from "./VentilationRadioButtons";
import styles from "./Hazard.module.css";
import { useState } from "react";
function Hazard({
  toxicAtmos,
  engulf,
  mech,
  heat,
  odefi,
  asphy,
  pressure,
  other,
  otherText,
  initialNotes,
  isolate,
  device,
  mechanical,
  naturalVent,
  setToxicAtmos,
  setEngulf,
  setMech,
  setHeat,
  setodefi,
  setAsphy,
  setPressure,
  setOther,
  setOtherText,
  setInitialNotes,
  setIsolate,
  setDevice,
  setMechanical,
  setNaturalVent,
}) {
  return (
    <>
      <Row>Part 3: Hazard Identification and Isolation</Row>
      <div className={styles.halfAdj}>
        <div
          className={`${styles.borderLeftRight} ${styles.half} ${styles.padding}`}
        >
          <b>
            What significant hazards exist or could arise from the work
            activity?
          </b>
          <div>
            <RadioButtons
              toxicAtmos={toxicAtmos}
              engulf={engulf}
              mech={mech}
              heat={heat}
              odefi={odefi}
              asphy={asphy}
              pressure={pressure}
              other={other}
              otherText={otherText}
              initialNotes={initialNotes}
              setToxicAtmos={setToxicAtmos}
              setEngulf={setEngulf}
              setMech={setMech}
              setHeat={setHeat}
              setodefi={setodefi}
              setAsphy={setAsphy}
              setPressure={setPressure}
              setOther={setOther}
              setOtherText={setOtherText}
              setInitialNotes={setInitialNotes}
            />
          </div>
        </div>
        <div
          className={`${styles.half} ${styles.padding} ${styles.border_right} `}
        >
          <b>Isolation Procedures:</b> Follow the facility’s lockout/tagout
          procedures to control all potential energy sources in the space. Block
          opening(s) to tank, if applicable. The following energy sources have
          been locked and tagged with appropriate devices applied:
          <div className={styles.flex}>
            <div className={styles.paddingText}>
              <label htmlFor="isolate">Isolate:</label>
              <br />
              <textarea
                className={`${styles.size} ${styles.borderAllAround}`}
                required
                onChange={(e) => setIsolate(e.target.value)}
                value={isolate}
              ></textarea>
            </div>
            <div className={styles.paddingText}>
              <label htmlFor="device">Device:</label>
              <br />
              <textarea
                className={`${styles.size} ${styles.borderAllAround}`}
                required
                onChange={(e) => setDevice(e.target.value)}
                value={device}
              ></textarea>
            </div>
          </div>
          <div>
            <VentilationRadioButtons
              mechanical={mechanical}
              naturalVent={naturalVent}
              setMechanical={setMechanical}
              setNaturalVent={setNaturalVent}
            >
              Ventilation Modification:
            </VentilationRadioButtons>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hazard;
