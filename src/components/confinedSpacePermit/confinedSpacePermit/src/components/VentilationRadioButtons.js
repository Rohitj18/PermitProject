function VentilationRadioButtons({
  children,
  mechanical,
  naturalVent,
  setMechanical,
  setNaturalVent,
}) {
  return (
    <>
      <div>
        <b>{children}</b>
      </div>
      <br />
      <div>
        <label htmlFor="mechanical">Mechanical</label>
        <span>
          <input
            type="radio"
            id="mechanical"
            required
            onClick={() =>
              mechanical === "NA"
                ? setMechanical("Yes")
                : mechanical === "Yes"
                ? setMechanical("NA")
                : setMechanical("Yes")
            }
            checked={mechanical === "Yes" ? true : false}
            readOnly
          />
          <label htmlFor="mechanical">Yes</label>
          <input
            type="radio"
            id="mechanical"
            name="mechanical"
            required
            onClick={() =>
              mechanical === "NA"
                ? setMechanical("No")
                : mechanical === "Yes"
                ? setMechanical("No")
                : setMechanical("NA")
            }
            checked={mechanical === "No" ? true : false}
            readOnly
          />
          <label htmlFor="mechanical">No</label>
          <input
            type="radio"
            id="mechanical"
            name="mechanical"
            required
            onClick={() =>
              mechanical === "Yes"
                ? setMechanical("NA")
                : mechanical === "NA"
                ? setMechanical("NULL")
                : setMechanical("NA")
            }
            checked={mechanical === "NA" ? true : false}
            readOnly
          />
          <label htmlFor="mechanical">N/A</label>
        </span>
        <br />
        <br />
        <label htmlFor="naturalVent">Natural ventilation only</label>
        <span>
          <input
            type="radio"
            id="naturalVent"
            required
            onClick={() =>
              naturalVent === "NA"
                ? setNaturalVent("Yes")
                : naturalVent === "Yes"
                ? setNaturalVent("NA")
                : setNaturalVent("Yes")
            }
            checked={naturalVent === "Yes" ? true : false}
            readOnly
          />
          <label htmlFor="naturalVent">Yes</label>
          <input
            type="radio"
            id="naturalVent"
            required
            onClick={() =>
              naturalVent === "NA"
                ? setNaturalVent("No")
                : naturalVent === "Yes"
                ? setNaturalVent("No")
                : setNaturalVent("NA")
            }
            checked={naturalVent === "No" ? true : false}
            readOnly
          />
          <label htmlFor="naturalVent">No</label>
          <input
            type="radio"
            id="naturalVent"
            required
            onClick={() =>
              mechanical === "Yes"
                ? setNaturalVent("NA")
                : naturalVent === "NA"
                ? setNaturalVent("NULL")
                : setNaturalVent("NA")
            }
            checked={naturalVent === "NA" ? true : false}
            readOnly
          />
          <label htmlFor="naturalVent">N/A</label>
        </span>
      </div>
    </>
  );
}

export default VentilationRadioButtons;
