import styles from "./RadioButtons.module.css";
function RadioButtons({
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
}) {
  return (
    <div className={styles.padding}>
      <input
        type="radio"
        id="toxicAtmosphere"
        onClick={() => setToxicAtmos((preVal) => !preVal)}
        readOnly
        checked={toxicAtmos}
      />
      <label htmlFor="toxicAtmosphere">Toxic Atmosphere</label>
      <br />
      <input
        type="radio"
        id="engulf"
        onClick={() => setEngulf((preVal) => !preVal)}
        readOnly
        checked={engulf}
      />
      <label htmlFor="engulf">Engulfment</label>
      <br />
      <input
        type="radio"
        id="mech"
        onClick={() => setMech((preVal) => !preVal)}
        readOnly
        checked={mech}
      />
      <label htmlFor="mech">Mechanical Hazards</label>
      <br />
      <input
        type="radio"
        id="heat"
        onClick={() => setHeat((preVal) => !preVal)}
        readOnly
        checked={heat}
      />
      <label htmlFor="heat">Heat</label>
      <br />
      <input
        type="radio"
        id="odefi"
        onClick={() => setodefi((preVal) => !preVal)}
        readOnly
        checked={odefi}
      />
      <label htmlFor="odefi">
        O <sub>2</sub> deficient
      </label>
      <br />
      <input
        type="radio"
        id="asphy"
        onClick={() => setAsphy((preVal) => !preVal)}
        readOnly
        checked={asphy}
      />
      <label htmlFor="asphy">Asphyxiation/entrapment</label>
      <br />
      <input
        type="radio"
        id="pressure"
        onClick={() => setPressure((preVal) => !preVal)}
        readOnly
        checked={pressure}
      />
      <label htmlFor="pressure">Pressurized Water</label>
      <br />
      <input
        type="radio"
        id="other"
        onClick={() => setOther((preVal) => !preVal)}
        readOnly
        checked={other}
      />
      <label htmlFor="other">other</label>
      {other && (
        <input
          type="text"
          id="otherText"
          onChange={(e) => setOtherText(e.target.value)}
          value={otherText}
          className={styles.inputMargin}
        />
      )}

      <br />
      <br />
      <label htmlFor="initial">
        All Authorized Entrants initial below to indicate awareness of the
        hazards indicated above:{" "}
      </label>
      <textarea
        id="initialNotes"
        onChange={(e) => setInitialNotes(e.target.value)}
        className={`${styles.widthAndHeight} ${styles.borderAllAround}`}
        value={initialNotes}
      ></textarea>
    </div>
  );
}

export default RadioButtons;
