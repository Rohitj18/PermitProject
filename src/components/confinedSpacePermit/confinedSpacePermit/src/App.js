import { useState, useEffect } from "react";
import axios from "axios";
import BasicInfo from "./components/BasicInfo";
import Communication from "./components/Communication";
import EquipmentCom from "./components/EquipmentCom";
import Hazard from "./components/Hazard";
import Header from "./components/Header";
import Organization from "./components/Organization";
import PermitClose from "./components/PermitClose";
import Personnel from "./components/Personnel";
import Testing from "./components/Testing";
import Title from "./components/Title";
import styles from "./App.module.css";
import { useParams } from "react-router-dom";

export default function ConfinedSpacePermit() {
  let { id } = useParams();

  console.log("This is userid in permit", id);

  // Header
  const [departmentName, setDepartmentName] = useState("");
  const [personInCharge1, setPersonInCharge1] = useState("");
  const [date, setDate] = useState(new Date());

  // Part 1 -> Basic Info
  const [activityNotes, setActivityNotes] = useState("");
  const [entrySpace, setEntrySpace] = useState("");
  const [personInCharge2, setPersonInCharge2] = useState("");
  const [permitNo, setPermitNo] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [timeStart, setTimeStart] = useState(0);
  const [timeEnd, setTimeEnd] = useState(0);

  // Part 2 -> Personnel
  const [aaName1, setaaName1] = useState("");
  const [aaName2, setaaName2] = useState("");
  const [aaPhone1, setaaPhone1] = useState(0);
  const [aaPhone2, setaaPhone2] = useState(0);
  const [aeName1, setaeName1] = useState("");
  const [aeName2, setaeName2] = useState("");
  const [aePhone1, setaePhone1] = useState(0);
  const [aePhone2, setaePhone2] = useState(0);
  const [rtName1, setrtName1] = useState("");
  const [rtName2, setrtName2] = useState("");
  const [rtPhone1, setrtPhone1] = useState(0);
  const [rtPhone2, setrtPhone2] = useState(0);

  // Part 3 -> Hazard
  const [toxicAtmos, setToxicAtmos] = useState(false);
  const [engulf, setEngulf] = useState(false);
  const [mech, setMech] = useState(false);
  const [heat, setHeat] = useState(false);
  const [odefi, setodefi] = useState(false);
  const [asphy, setAsphy] = useState(false);
  const [pressure, setPressure] = useState(false);
  const [other, setOther] = useState(false);
  const [otherText, setOtherText] = useState("");
  const [initialNotes, setInitialNotes] = useState("");

  const [isolate, setIsolate] = useState("");
  const [device, setDevice] = useState("");
  const [mechanical, setMechanical] = useState("NA");
  const [naturalVent, setNaturalVent] = useState("NA");
  // Part 4 -> Communication

  // Part 5 -> EquipmentCom
  const [gasMonitor, setGasMonitor] = useState("NA");
  const [hoist, setHoist] = useState("NA");
  const [entry, setEntry] = useState("NA");
  const [electric, setElectric] = useState("NA");
  const [classElement, setClassElement] = useState("NA");
  const [safety, setSafety] = useState("NA");
  const [communication, setCommunication] = useState("NA");
  const [protective, setProtective] = useState("NA");
  const [ventSystem, setVentSystem] = useState("NA");

  // Part 6 -> Testing
  const [permitReclassify, setPermitReclassify] = useState(false);
  // Part 7 -> Organization
  const [precaution, setPrecaution] = useState(false);

  const [ppName, setppName] = useState("");
  const [ppSignature, setppSignature] = useState("");
  const [ppDate, setppDate] = useState(new Date());
  const [ppTime, setppTime] = useState(0);

  const [paName, setpaName] = useState("");
  const [paSignature, setpaSignature] = useState("");
  const [paDate, setpaDate] = useState(new Date());
  const [paTime, setpaTime] = useState(0);

  const [rhName, setrhName] = useState("");
  const [rhSignature, setrhSignature] = useState("");
  const [rhDate, setrhDate] = useState(new Date());
  const [rhTime, setrhTime] = useState(0);

  // Part 8 -> Permit Close
  const [permitClose, setPermitClose] = useState(false);

  function formatISOStringToDate(ISOString) {
    const date = new Date(ISOString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Header
    const headerData = {
      department: departmentName,
      personInCharge1,
      headerDate: date,
    };
    console.log(headerData);
    //Part 1 -> Basic Info
    const part1 = {
      activityDescription: activityNotes,
      entrySpace,
      personInCharge2,
      permitno: permitNo,
      jobLocation,
      durationPermit: { dateStart, dateEnd, timeStart, timeEnd },
    };
    // Part 2 -> Personnel
    const part2 = {
      authorizedAttendants: { aaName1, aaPhone1, aaName2, aaPhone2 },
      authorizedEntrants: { aeName1, aePhone1, aeName2, aePhone2 },
      rescueTeam: { rtName1, rtPhone1, rtName2, rtPhone2 },
    };
    // Part 3 -> Hazard
    const part3 = {
      toxicAtmosphere: toxicAtmos,
      engulfment: engulf,
      mechanicalHazards: mech,
      heat: heat,
      o2Deficient: odefi,
      asphyxiationEntrapment: asphy,
      pressurizeWater: pressure,
      other: other,
      otherText: otherText,
      initial: initialNotes,
      isolationSchema: {
        isolate: isolate,
        device: device,
        mechanical: mechanical,
        naturalVentilationOnly: naturalVent,
      },
    };
    // Part 4 -> Communication

    // Part 5 -> EquipmentCom
    const part5 = {
      directReadingGasMonitor: gasMonitor,
      hoistingEquipment: hoist,
      entryStand: entry,
      electricEqui: electric,
      class: classElement,
      safetyHarness: safety,
      poweredCommunication: communication,
      protectiveClothing: protective,
      ventilationSystem: ventSystem,
    };
    // Part 6 -> Testing
    const part6 = { permitReclassify: permitReclassify };
    // Part 7 -> Organization
    const part7 = {
      precaution: precaution,
      permitPrepared: { ppName, ppSignature, ppDate, ppTime },
      permitApproved: { paName, paSignature, paDate, paTime },
      reviewHead: { rhName, rhSignature, rhDate, rhTime },
    };
    // Part 8 -> Permit Close
    const part8 = { permissionWithdraw: permitClose };
    const requestData = {
      header: headerData,
      part1: part1,
      part2: part2,
      part3: part3,
      part5: part5,
      part6: part6,
      part7: part7,
      part8: part8,
    };
    console.log("submmited formed");
    // const res = await fetch("http://localhost:4000/api/v1/submit", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     header: headerData,
    //     part1: part1,
    //     part2: part2,
    //     part3: part3,
    //     part5: part5,
    //     part6: part6,
    //     part7: part7,
    //     part8: part8,
    //   }),
    // });
    const res = await axios.post(
      "http://localhost:4000/api/v1/submit",
      requestData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    // Headers
    setDepartmentName("");
    setPersonInCharge1("");
    setDate(new Date());
    // Part-1
    setActivityNotes("");
    setEntrySpace("");
    setPersonInCharge2("");
    setPermitNo("");
    setJobLocation("");
    setDateStart(new Date());
    setDateEnd(new Date());
    setTimeStart("");
    setTimeEnd("");
    // Part-2
    setaaName1("");
    setaaName2("");
    setaaPhone1(0);
    setaaPhone2(0);
    setaeName1("");
    setaeName2("");
    setaePhone1(0);
    setaePhone2(0);
    setrtName1("");
    setrtName2("");
    setrtPhone1(0);
    setrtPhone2(0);
    // Part-3
    setToxicAtmos(false);
    setEngulf(false);
    setMech(false);
    setHeat(false);
    setodefi(false);
    setAsphy(false);
    setPressure(false);
    setOther(false);
    setOtherText("");
    setInitialNotes("");
    setIsolate("");
    setDevice("");
    setMechanical("NA");
    setNaturalVent("NA");
    // Part-4

    // Part-5
    setGasMonitor("");
    setHoist("");
    setEntry("");
    setElectric("");
    setClassElement("");
    setSafety("");
    setCommunication("");
    setProtective("");
    setVentSystem("");
    // Part-6
    setPermitReclassify(false);
    // Part-7
    setppName("");
    setppDate(new Date());
    setppTime(0);
    setpaName("");
    setpaDate(new Date());
    setpaTime(0);
    setrhName("");
    setrhDate(new Date());
    setrhTime(0);
    // Part-8
    setPermitClose(false);

    //const data = await res.json();
    //console.log("Sucessfull");
    console.log(res);
  }

  useEffect(() => {
    if (id) {
      handleGetRequest();
    }
  }, []);

  async function handleGetRequest(e) {
    e.preventDefault();
    // Fetch Request

    // console.log("Working!!");
    // const res = await fetch("/getRequest", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // });
    // console.log(res);
    /*const data = await res.json();
    console.log("front-end data");
    console.log(data);*/

    // Axios Request
    console.log("Working!!");
    try {
      const res = await axios.post("http://localhost:4000/api/v1/getRequest", {
        id: id,
      });
      // const res = await axios.get("http://localhost:4000/api/v1/getRequest");
      console.log(res.data);
      const responseData = res.data;
      // Headers
      setDepartmentName(responseData.header.department);
      setPersonInCharge1(responseData.header.personInCharge1);
      console.log(
        formatISOStringToDate(new Date(responseData.header.headerDate))
      );
      setDate(responseData.header.headerDate);

      // Part-1
      setActivityNotes(responseData.part1.activityDescription);
      setEntrySpace(responseData.part1.entrySpace);
      setPersonInCharge2(responseData.part1.personInCharge2);
      setPermitNo(responseData.part1.permitno);
      setJobLocation(responseData.part1.jobLocation);
      setDateStart(responseData.part1.durationPermit.dateStart);
      setDateEnd(responseData.part1.durationPermit.dateEnd);
      setTimeStart(responseData.part1.durationPermit.timeStart);
      setTimeEnd(responseData.part1.durationPermit.timeEnd);

      // Part-2
      setaaName1(responseData.part2.authorizedAttendants.aaName1);
      setaaName2(responseData.part2.authorizedAttendants.aaName2);
      setaaPhone1(responseData.part2.authorizedAttendants.aaPhone1);
      setaaPhone2(responseData.part2.authorizedAttendants.aaPhone2);
      setaeName1(responseData.part2.authorizedEntrants.aeName1);
      setaeName2(responseData.part2.authorizedEntrants.aeName2);
      setaePhone1(responseData.part2.authorizedEntrants.aePhone1);
      setaePhone2(responseData.part2.authorizedEntrants.aePhone2);
      setrtName1(responseData.part2.rescueTeam.rtName1);
      setrtName2(responseData.part2.rescueTeam.rtName2);
      setrtPhone1(responseData.part2.rescueTeam.rtPhone1);
      setrtPhone2(responseData.part2.rescueTeam.rtPhone2);
      // Part-3
      setToxicAtmos(responseData.part3.toxicAtmosphere);
      setEngulf(responseData.part3.engulfment);
      setMech(responseData.part3.mechanicalHazards);
      setHeat(responseData.part3.heat);
      setodefi(responseData.part3.o2Deficient);
      setAsphy(responseData.part3.asphyxiationEntrapment);
      setPressure(responseData.part3.pressurizedWater);
      setOther(responseData.part3.other);
      setOtherText(responseData.part3.otherText);
      setInitialNotes(responseData.part3.initial);

      setIsolate(responseData.part3.isolationSchema.isolate);
      setDevice(responseData.part3.isolationSchema.device);
      setMechanical(responseData.part3.isolationSchema.mechanical);
      setNaturalVent(responseData.part3.isolationSchema.naturalVentilationOnly);
      // PART-4

      // Part-5
      setGasMonitor(responseData.part5.directReadingGasMonitor);
      setHoist(responseData.part5.hoistingEquipment);
      setEntry(responseData.part5.entryStand);
      setElectric(responseData.part5.electricEqui);
      setClassElement(responseData.part5.class);
      setSafety(responseData.part5.safetyHarness);
      setCommunication(responseData.part5.poweredCommunication);
      setProtective(responseData.part5.protectedClothing);
      setVentSystem(responseData.part5.ventilationSystem);
      // PART-6
      setPermitReclassify(responseData.part6.permitReclassify);
      // Part-7
      setPrecaution(responseData.part7.precaution);
      setppName(responseData.part7.permitPrepared.ppName);
      setppDate(responseData.part7.permitPrepared.ppDate);
      setppTime(responseData.part7.permitPrepared.ppTime);
      setpaName(responseData.part7.permitApproved.paName);
      setpaDate(responseData.part7.permitApproved.paDate);
      setpaTime(responseData.part7.permitApproved.paTime);
      setrhName(responseData.part7.reviewHead.rhName);
      setrhDate(responseData.part7.reviewHead.rhDate);
      setrhTime(responseData.part7.reviewHead.rhTime);
      // Part-8
      setPermitClose(responseData.part8.permissionWithdraw);
    } catch (e) {
      console.log(e.response.data);
    }
  }
  return (
    <>
      <div className={`${styles.contentMargin} ${styles.background}`}>
        <form onSubmit={handleSubmit} method="POST">
          <Title />
          <Header
            departmentName={departmentName}
            personInCharge1={personInCharge1}
            date={date}
            setDepartmentName={setDepartmentName}
            setPersonInCharge1={setPersonInCharge1}
            setDate={setDate}
          />

          <BasicInfo
            activityNotes={activityNotes}
            entrySpace={entrySpace}
            personInCharge2={personInCharge2}
            permitNo={permitNo}
            jobLocation={jobLocation}
            dateStart={dateStart}
            dateEnd={dateEnd}
            timeStart={timeStart}
            timeEnd={timeEnd}
            setActivityNotes={setActivityNotes}
            setEntrySpace={setEntrySpace}
            setPersonInCharge2={setPersonInCharge2}
            setPermitNo={setPermitNo}
            setJobLocation={setJobLocation}
            setDateStart={setDateStart}
            setDateEnd={setDateEnd}
            setTimeStart={setTimeStart}
            setTimeEnd={setTimeEnd}
          />
          <Personnel
            aaName1={aaName1}
            aaName2={aaName2}
            aaPhone1={aaPhone1}
            aaPhone2={aaPhone2}
            aeName1={aeName1}
            aeName2={aeName2}
            aePhone1={aePhone1}
            aePhone2={aePhone2}
            rtName1={rtName1}
            rtName2={rtName2}
            rtPhone1={rtPhone1}
            rtPhone2={rtPhone2}
            setaaName1={setaaName1}
            setaaName2={setaaName2}
            setaaPhone1={setaaPhone1}
            setaaPhone2={setaaPhone2}
            setaeName1={setaeName1}
            setaeName2={setaeName2}
            setaePhone1={setaePhone1}
            setaePhone2={setaePhone2}
            setrtName1={setrtName1}
            setrtName2={setrtName2}
            setrtPhone1={setrtPhone1}
            setrtPhone2={setrtPhone2}
          />
          <Hazard
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
            isolate={isolate}
            device={device}
            mechanical={mechanical}
            naturalVent={naturalVent}
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
            setIsolate={setIsolate}
            setDevice={setDevice}
            setMechanical={setMechanical}
            setNaturalVent={setNaturalVent}
          />
          <Communication />
          <EquipmentCom
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
          />
          <Testing
            permitReclassify={permitReclassify}
            setPermitReclassify={setPermitReclassify}
          />
          <Organization
            precaution={precaution}
            ppName={ppName}
            ppSignature={ppSignature}
            ppDate={ppDate}
            ppTime={ppTime}
            paName={paName}
            paSignature={paSignature}
            paDate={paDate}
            paTime={paTime}
            rhName={rhName}
            rhSignature={rhSignature}
            rhDate={rhDate}
            rhTime={rhTime}
            setPrecaution={setPrecaution}
            setppName={setppName}
            setppSignature={setppSignature}
            setppDate={setppDate}
            setppTime={setppTime}
            setpaName={setpaName}
            setpaSignature={setpaSignature}
            setpaDate={setpaDate}
            setpaTime={setpaTime}
            setrhName={setrhName}
            setrhSignature={setrhSignature}
            setrhDate={setrhDate}
            setrhTime={setrhTime}
          />
          <PermitClose
            permitClose={permitClose}
            setPermitClose={setPermitClose}
          />

          <div className={`${styles.submit}`}>
            <button className={`${styles.button}`}>Submit</button>
          </div>
        </form>
      </div>

      <form onClick={handleGetRequest} method="GET">
        <div className={`${styles.submit}`}>
          <button className={`${styles.button}`}>Get Details</button>
        </div>
      </form>
    </>
  );
}
