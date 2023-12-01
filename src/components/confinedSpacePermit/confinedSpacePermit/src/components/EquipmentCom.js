import EquipmentRadioButtons from "./EquipmentRadioButtons";
import Row from "./Row";
import styles from "./EquipmentCom.module.css";
function EquipmentCom({
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
    <>
      <Row>Part 5: Equipment Required for Entry, Work, or Rescue</Row>

      <div className={`${styles.border}`}>
        <EquipmentRadioButtons
          gasMonitor={gasMonitor}
          hoist={hoist}
          entry={entry}
          electric={electric}
          classElement={classElement}
          safety={safety}
          communication={communication}
          protective={protective}
          ventSystem={ventSystem}
          setGasMonitor={setGasMonitor}
          setHoist={setHoist}
          setEntry={setEntry}
          setElectric={setElectric}
          setClassElement={setClassElement}
          setSafety={setSafety}
          setCommunication={setCommunication}
          setProtective={setProtective}
          setVentSystem={setVentSystem}
        >
          Equipment:
        </EquipmentRadioButtons>
      </div>
    </>
  );
}

export default EquipmentCom;
