import React, { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./PermitTM.css";
import Axios from "axios";

const PermitTM = () => {
  const [formdata, setformdata] = useState();
  let { id ,id1} = useParams();
    
    console.log("This is userid in permit",id);
    console.log("This is userid in permit",id1);

    

    useEffect(()=>{
        
        if(id){
          getData();
        }
    },[])

  const insertdata = (e) => {
    e.preventDefault();
    var data = new FormData(e.target);
    let PTMGI = Object.fromEntries(data.entries());

    Axios.post("http://localhost:4000/api/v1/insert", PTMGI).then((res) => {
      console.log(res);
      console.log("added");
    });
  };

  const getData = async (e) => {
    e.preventDefault();
    console.log("hi");
    const res = await Axios.post("http://localhost:4000/api/v1/getData", {id:id});
    console.log(res.data);
    setformdata(res.data);
  };

  return (
    <>
      <form className="permitc" onSubmit={insertdata}>
        <table className="mt-8">
          <tbody className="mt-4">
            <tr>
              <th rowSpan="2">
                <img src="logo.jpg" width="100%" height="100%" />
              </th>
              <th>
                <font color="#313030">PERMIT TO MOVE&nbsp;</font>
                <br />
              </th>
              <th>
                <font color="#313030">EHSF: 010:01</font>
                <br />
              </th>
            </tr>
            <tr>
              <td>LIFT AND MOVE OF HEAVY OBJECTS&nbsp;</td>
              <td>Issue Date- {new Date().toLocaleDateString()}&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <br />

        <div>
          <p>USE OF THIS FORM</p>
          This form is for conducting Risk Assessment when Idling and/or moving
          heavy machines. <br />
          It may aIso be used for movmg & lifting substantial parts of machines
        </div>
        <br />

        <div>
          <p>For machine move</p>
          Use of this form and plant director sign off of Machine Move Permit is
          mandatory <br />
          For moving/lifting substantial part of machine <br />
          Use of this form is but plant director sign off is not
        </div>
        <br />
        <br />

        <table>
          <thead>
            <tr>
              <th colSpan="6">1. General Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Machine No</td>
              <td>
                <input className="input1"
                  type="number"
                  name="Machine_No"
                  value={formdata?.Machine_No}
                />
              </td>
              <td>Location</td>
              <td>
                <input className="input1" type="text" name="Location" value={formdata?.Location} />
              </td>
              <td>
                <font color="#313030">Date</font>
                <br />
              </td>
              <td>
                <input className="input1" type="date" name="Date" value={formdata?.Date} />
              </td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                <input className="input1"
                  type="text"
                  name="Description"
                  value={formdata?.Description}
                />
              </td>
              <td>Project leader</td>
              <td>
                <input className="input1"
                  type="text"
                  name="Project_Leader"
                  value={formdata?.Project_Leader}
                />
              </td>
              <td>Name</td>
              <td>
                <input className="input1" type="text" name="Name" value={formdata?.Name} />
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <table>
          <thead>
            <tr>
              <th>2. Description Of Work</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input className="input1" type="text" name="Desc1" value={formdata?.Desc1} />
              </td>
            </tr>
            <tr>
              <td>
                <input className="input1" type="text" name="Desc2" value={formdata?.Desc2} />
              </td>
            </tr>
            <tr>
              <td>
                <input className="input1" type="text" name="Desc3" value={formdata?.Desc3} />
              </td>
            </tr>
            <tr>
              <td>
                <input className="input1" type="text" name="Desc4" value={formdata?.Desc4} />
              </td>
            </tr>
            <tr>
              <td>
                <input className="input1" type="text" name="Desc5" value={formdata?.Desc5} />
              </td>
            </tr>
            <tr>
              <td>
                <input className="input1" type="text" name="Desc6" value={formdata?.Desc6} />
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <table>
          <thead>
            <tr>
              <th colSpan="8">
                <font color="#313030">
                  3. Risk and Hazards - which hazards can appear or/and which
                  risk are expected
                </font>
                <br />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>YES</td>
              <td>NO</td>
              <td></td>
              <td></td>
              <td>YES</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>3.1</td>
              <td>High weight(&gt; 220kg)</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y31"
                  value={true}
                  checked={formdata?.y31}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y31"
                  value={false}
                  checked={!formdata?.y31}
                />
              </td>
              <td>3.11</td>
              <td>Trapping space below machine</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y311"
                  value={true}
                  checked={formdata?.y311}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y311"
                  value={false}
                  checked={!formdata?.y311}
                />
              </td>
            </tr>
            <tr>
              <td>3.2</td>
              <td>Unfavourable equipment shape</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y32"
                  value={true}
                  checked={formdata?.y32}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y32"
                  value={false}
                  checked={!formdata?.y32}
                />
              </td>
              <td>3.12</td>
              <td>Flammable material </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y312"
                  value={true}
                  checked={formdata?.y312}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y312"
                  value={false}
                  checked={!formdata?.y312}
                />
              </td>
            </tr>
            <tr>
              <td>3.3</td>
              <td>Unfavourable ratio footprint to height</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y33"
                  value={true}
                  checked={formdata?.y33}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y33"
                  value={false}
                  checked={!formdata?.y33}
                />
              </td>
              <td>3.13</td>
              <td>Chemicals</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y313"
                  value={true}
                  checked={formdata?.y313}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y313"
                  value={false}
                  checked={!formdata?.y313}
                />
              </td>
            </tr>
            <tr>
              <td>3.4</td>
              <td>High centre of gravity(instability)</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y34"
                  value={true}
                  checked={formdata?.y34}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y34"
                  value={false}
                  checked={!formdata?.y34}
                />
              </td>
              <td>3.14</td>
              <td>Vapour(or fumes)- Air emissions </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y314"
                  value={true}
                  checked={formdata?.y314}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y314"
                  value={false}
                  checked={!formdata?.y314}
                />
              </td>
            </tr>
            <tr>
              <td>3.5</td>
              <td>Unfavourable support point</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y35"
                  value={true}
                  checked={formdata?.y35}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y35"
                  value={false}
                  checked={!formdata?.y35}
                />
              </td>
              <td>3.15</td>
              <td>Poor working posture</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y315"
                  value={true}
                  checked={formdata?.y315}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y315"
                  value={false}
                  checked={!formdata?.y315}
                />
              </td>
            </tr>
            <tr>
              <td>3.6</td>
              <td>Unfavourable floor condition</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y36"
                  value={true}
                  checked={formdata?.y36}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y36"
                  value={false}
                  checked={!formdata?.y36}
                />
              </td>
              <td>3.16</td>
              <td>Additional PPE necessary </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y316"
                  value={true}
                  checked={formdata?.y316}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y316"
                  value={false}
                  checked={!formdata?.y316}
                />
              </td>
            </tr>
            <tr>
              <td>3.7</td>
              <td>Limited space to Manoeuvre</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y37"
                  value={true}
                  checked={formdata?.y37}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y37"
                  value={false}
                  checked={!formdata?.y37}
                />
              </td>
              <td>3.17</td>
              <td>Spill to sewer, storm water or soil </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y317"
                  value={true}
                  checked={formdata?.y317}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y317"
                  value={false}
                  checked={!formdata?.y317}
                />
              </td>
            </tr>
            <tr>
              <td>3.8</td>
              <td>Height limitations above equipment</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y38"
                  value={true}
                  checked={formdata?.y38}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y38"
                  value={false}
                  checked={!formdata?.y38}
                />
              </td>
              <td>3.18</td>
              <td>Hazardous Waste Generation</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y318"
                  value={true}
                  checked={formdata?.y318}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y318"
                  value={false}
                  checked={!formdata?.y318}
                />
              </td>
            </tr>
            <tr>
              <td>3.9</td>
              <td>Adequate lifting gear unavailable</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y39"
                  value={true}
                  checked={formdata?.y39}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y39"
                  value={false}
                  checked={!formdata?.y39}
                />
              </td>
              <td>3.19</td>
              <td>Asbestos Disturbance</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y319"
                  value={true}
                  checked={formdata?.y319}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y319"
                  value={false}
                  checked={!formdata?.y319}
                />
              </td>
            </tr>
            <tr>
              <td>3.10</td>
              <td>Subcontractors in work team </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y310"
                  value={true}
                  checked={formdata?.y310}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y310"
                  value={false}
                  checked={!formdata?.y310}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <table>
          <thead>
            <tr>
              <th colSpan="5">4. Considered precautions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2"></td>
              <td>YES</td>
              <td>NO</td>
              <td>Notes</td>
            </tr>
            <tr>
              <td>4.1</td>
              <td>Operating instructions/manuals consulted</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y41"
                  value={true}
                  checked={formdata?.y41}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y41"
                  value={false}
                  checked={!formdata?.y41}
                />
              </td>
              <td>
                <input className="input1" type="text" name="Notes1" value={formdata?.Notes1} />
              </td>
            </tr>
            <tr>
              <td>4.2</td>
              <td>Crane/special lifting device necessary e.g forklift</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y42"
                  value={true}
                  checked={formdata?.y42}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y42"
                  value={false}
                  checked={!formdata?.y42}
                />
              </td>
              <td>
                <input className="input1" type="text" name="Notes2" value={formdata?.Notes2} />
              </td>
            </tr>
            <tr>
              <td>4.3</td>
              <td>Lifting kit(jack,roller,slings, etc) / checked as ok</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y43"
                  value={true}
                  checked={formdata?.y43}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y43"
                  value={false}
                  checked={!formdata?.y43}
                />
              </td>
              <td>
                <input className="input1" type="text" name="Notes3" value={formdata?.Notes3} />
              </td>
            </tr>
            <tr>
              <td>4.4</td>
              <td>Working area safeguarded (cleared, spotter, etc)</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y44"
                  value={true}
                  checked={formdata?.y44}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y44"
                  value={false}
                  checked={!formdata?.y44}
                />
              </td>
              <td>
                <input className="input1" type="text" name="Notes4" value={formdata?.Notes4} />
              </td>
            </tr>
            <tr>
              <td>4.5</td>
              <td>Transport route safeguarded(cleared)</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y45"
                  value={true}
                  checked={formdata?.y45}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y45"
                  value={false}
                  checked={!formdata?.y45}
                />
              </td>
              <td>
                <input className="input1" type="text" name="Notes5" value={formdata?.Notes5} />
              </td>
            </tr>
            <tr>
              <td>4.6</td>
              <td>Any additional safety precautions needed(descibe)</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y46"
                  value={true}
                  checked={formdata?.y46}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y46"
                  value={false}
                  checked={!formdata?.y46}
                />
              </td>
              <td>
                <input className="input1" type="text" name="Notes6" value={formdata?.Notes6} />
              </td>
            </tr>
            <tr>
              <td>4.7</td>
              <td>
                Services(Air, power, water ) disconneced and stored energy
                released
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y47"
                  value={true}
                  checked={formdata?.y47}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y47"
                  value={false}
                  checked={!formdata?.y47}
                />
              </td>
              <td>
                <input className="input1" type="text" name="Notes7" value={formdata?.Notes7} />
              </td>
            </tr>
            <tr>
              <td>4.8</td>
              <td>Approved work plan avialable</td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y48"
                  value={true}
                  checked={formdata?.y48}
                />
              </td>
              <td>
                <input className="input1"
                  type="radio"
                  name="y48"
                  value={false}
                  checked={!formdata?.y48}
                />
              </td>
              <td>
                <input className="input1" type="text" name="Notes8" value={formdata?.Notes8} />
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <table>
          <thead>
            <tr>
              <th>
                <font color="#313030">
                  5. Describe the necessary safety countermeasure to reduce the
                  risk( for hazards identified in sec-3)
                </font>
                <br />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1{" "}
                <input className="input1"
                  type="text"
                  name="safety1"
                  value={formdata?.safety1}
                />
              </td>
            </tr>
            <tr>
              <td>
                2{" "}
                <input className="input1"
                  type="text"
                  name="safety2"
                  value={formdata?.safety2}
                />
              </td>
            </tr>
            <tr>
              <td>
                3{" "}
                <input className="input1"
                  type="text"
                  name="safety3"
                  value={formdata?.safety3}
                />
              </td>
            </tr>
            <tr>
              <td>
                4{" "}
                <input className="input1"
                  type="text"
                  name="safety4"
                  value={formdata?.safety4}
                />
              </td>
            </tr>
            <tr>
              <td>
                5{" "}
                <input className="input1"
                  type="text"
                  name="safety5"
                  value={formdata?.safety5}
                />
              </td>
            </tr>
            <tr>
              <td>
                6{" "}
                <input className="input1"
                  type="text"
                  name="safety6"
                  value={formdata?.safety6}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <table>
          <thead>
            <tr>
              <th colSpan="3">
                <font color="#313030">6. Machine Move team</font>
                <br />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td>Internal</td>
              <td colSpan="2">
                {" "}
                <input className="input1"
                  type="text"
                  name="Internal"
                  value={formdata?.Internal}
                />
              </td>
            </tr>
            <tr>
              <td>External</td>
              <td colSpan="2">
                {" "}
                <input className="input1"
                  type="text"
                  name="External"
                  value={formdata?.External}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td rowSpan="2">
                Initiated by
                <br />
                <span>( ME Manager )</span>
              </td>
              <td>Name /Sign</td>
              <td>
                <input className="input1" type="text" name="MEName" value={formdata?.MEName} />
              </td>
            </tr>
            <tr>
              <td>Date</td>
              <td>
                <input className="input1" type="date" name="MEDate" value={formdata?.MEDate} />
              </td>
            </tr>
            <tr>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td rowSpan="2">
                Assessment checked by
                <br />
                <span>( Maintenance Manager)</span>
              </td>
              <td>Name /Sign</td>
              <td>
                <input className="input1" type="text" name="MainName" value={formdata?.MainName} />
              </td>
            </tr>
            <tr>
              <td>Date</td>
              <td>
                <input className="input1" type="date" name="MainDate" value={formdata?.MainDate} />
              </td>
            </tr>
            <tr>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td rowSpan="2">
                Reviewed By
                <br />
                (HSE Head)
                <br />
              </td>
              <td>Name /Sign</td>
              <td>
                <input className="input1" type="text" name="HSEName" value={formdata?.HSEName} />
              </td>
            </tr>
            <tr>
              <td>Date</td>
              <td>
                <input className="input1" type="date" name="HSEDate" value={formdata?.HSEDate} />
              </td>
            </tr>
            <tr>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td rowSpan="2">
                Machine Move Approved by
                <br />
                <span>(Plant Head)</span>
              </td>
              <td>Name /Sign</td>
              <td>
                <input className="input1" type="text" name="PHName" value={formdata?.PHName} />
              </td>
            </tr>
            <tr>
              <td>Date</td>
              <td>
                <input className="input1" type="date" name="PHDate" value={formdata?.PHDate} />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 shadow-xl hover:bg-indigo-500 text-white font-bold rounded-md mt-3 px-4 py-2 w-30"
          >
            submit
          </button>
        </div>
      </form>
      <button
        onClick={getData}
        className="bg-indigo-600 shadow-xl hover:bg-indigo-500 text-white font-bold rounded-md mt-3 px-4 py-2 w-30"
      >
        GET
      </button>
    </>
  );
};

export default PermitTM;
