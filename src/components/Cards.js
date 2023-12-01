import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import axios from 'axios';
import './Cards.css'
// import { toast } from 'react-toastify';
import toast from 'react-hot-toast';
import MultiSelect from 'react-multiple-select-dropdown-lite'
import 'react-multiple-select-dropdown-lite/dist/index.css'



function Cards() {
  let navigate = useNavigate();
  const [DataArr, setDataArr] = useState([]);
  const [userData, setUserData] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdmin1, setIsAdmin1] = useState(false);
  const [isAdmin2, setIsAdmin2] = useState(false);
  const [isAdmin3, setIsAdmin3] = useState(false);
  const [reRender, setreRender] = useState(false);

  const [value, setvalue] = useState('')
  const [requiredDocs, setRequiredDocs] = useState([]);
  

  const handleOnchange = val => {
    setvalue(val)
    console.log(val)
  }

  const paths = {
    "Confined_space":"/confinedSpacePermit",
    "Permit_to_Move":"/permitToMove",
    "Work_At_height":"/"
  }

  const options = [
    { label: 'Confined space Permit', value: 'Confined_space' },
    { label: 'Permit to Move', value: 'Permit_to_Move' },
    { label: 'Work At height Permit', value: 'Work_At_height' },
    { label: 'Electrical work Permit', value: 'Electrical_work' },
  ]



  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.email === "admin1" || user.email === "admin2" || user.email === "admin3") {
      setIsAdmin(true);
      if (user.email === "admin1") setIsAdmin1(true);
      else if (user.email === "admin2") setIsAdmin2(true);
      if (user.email === "admin3") setIsAdmin3(true);
      adminFetchData();
    } else {
      fetchData();
    }
  }, [])

  const fetchData = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserData(user);
    const response = await axios.post('http://localhost:4000/api/v1/getAllForms', { userId: user._id });
    console.log("This is the response", response?.data?.data);
    setDataArr(response?.data?.data);
  }

  const adminFetchData = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("this is frontend admni", userData.email);
    const response = await axios.post('http://localhost:4000/api/v1/getAllAdminForm', { admin: user.email });
    console.log("This is the response", response?.data?.data);
    setDataArr(response?.data?.data);
  }

  const AdminRequiredForm = async (e) => {
    let reqArr = value.split(",")
    setRequiredDocs(reqArr);
    const { id } = e.target;
    console.log("This is the form id", id);
    let response = null;
    if (reqArr.length === 0) {
      toast.error("Required docs is empty")
    } else {
      response = await axios.post('http://localhost:4000/api/v1/sendReqDocs', { formId: id, reqDocs: reqArr });
    }
    console.log("This is the response", response?.data?.data);
    if (response) {
      toast.success("sent Required Form");
      adminFetchData();
    } else {
      toast.error("Please try again");
    }


  }

  const admin1Approval = async (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { id } = e.target;
    const response = await axios.post('http://localhost:4000/api/v1/setApproval', { formId: id, admin: user.email });
    adminFetchData();
    if (response) {
      toast.success("Approved");
    } else {
      toast.error("Please try again");
    }
    console.log("This is the response", response?.data?.data);
  }
  



  return (
    <div className='w-[80vw]'>
      <div className="w-[100%] h-[100%] flex flex-wrap gap-5">
        {DataArr.map((form, index) => (
          <div className="w-[300px] h-[300px] rounded-xl text-white gap-2 bg-[#263043] m-3 inline-block" key={index}>
            <div className=' w-[100%] h-[100%] flex flex-col gap-3 items-center justify-center'>
              <div className="">User :{form.user.email}</div>
              <div className='flex flex-col w-[100%] h-[100%]'>
                <p>Status :</p>
                <div className='flex gap-2'>
                  <div className='flex gap-2 items-center justify-center'>
                    <p>Admin 1 :</p>
                    {
                      form.approve1 === true ? (<FaCheck style={{ color: "green" }} />) : (<ImCross style={{ color: "red" }} />)
                    }


                  </div>
                  <div className='flex gap-2 items-center justify-center'>
                    <p>Admin 2 :</p>
                    {
                      form.approve2 === true ? (<FaCheck style={{ color: "green" }} />) : (<ImCross style={{ color: "red" }} />)
                    }


                  </div>
                  <div className='flex gap-2 items-center justify-center'>
                    <p>Admin 3 :</p>
                    {
                      form.approve3 === true ? (<FaCheck style={{ color: "green" }} />) : (<ImCross style={{ color: "red" }} />)
                    }

                  </div>
                </div>
                {
                  isAdmin1 && form.reqDocsSubmit === false ? (
                    <div>
                      <div className="preview-values">
                        <h4>Required Forms</h4>
                        {/* {value} */}
                      </div>

                      <MultiSelect
                        onChange={handleOnchange}
                        options={options}
                        className="text-black"
                      />
                      <button id={`${form.formID._id}`} onClick={AdminRequiredForm} className='flex justify-center items-center w-[8em] h-[2em] bg-red-500 rounded-lg'>Submit</button>
                    </div>
                  ) : (<div></div>)
                }
                {
                  isAdmin1 === false && form.reqDocsSubmit === true ? (<div className=' mx-auto flex flex-col w-[18rem] h-[5rem] bg-red-500'>
                      {
                        <div className='w-[100%] h-[100%]'>{form.requiredDocs.reqDocs.map((object,index)=>(
                          <div className='flex flex-row gap-5' key={index}>
                            <p>{object}</p>
                            {
                              object in form.requiredDocs.submitedDocs?(<div>
                                <button onClick={()=>navigate(paths[object]+`/${form.formID._id}/${form.requiredDocs.submitedDocs[object]}`)}>Preview</button>
                              </div>):(<div>
                                <button onClick={()=>navigate(paths[object]+`/${form.formID._id}`)}>Submit</button>
                              </div>)
                            }
                          </div>
                        ))}</div>
                      }




                  </div>) : (<></>)
                }

              </div>
              <button className='flex justify-center items-center w-[8em] h-[2em] bg-orange-500 rounded-lg' onClick={() => { navigate(`/permit/${form.formID._id}`) }}>Form preview</button>
              {
                isAdmin === true ? (
                  <button className='flex justify-center items-center w-[8em] h-[2em] bg-green-500 rounded-lg' id={`${form.formID._id}`} onClick={admin1Approval}>Approve</button>
                ) : (<></>)
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards


{
  // form.requiredDocs.reqDocs.map((object) => {
  //   <div className='flex flex-row gap-5'>
  //     <p>{object}</p>
  //     <button>Submit</button> form.requiredDocs.reqDocs.length === Object.keys(form.requiredDocs.submitedDocs).length
  //   </div>
  // ))
}