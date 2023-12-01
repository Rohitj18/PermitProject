import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import logo from '../assets/logo.png'
import Part1 from '../components/Part1'
import Part2 from '../components/Part2'
import Part3 from '../components/Part3'
import Part4 from '../components/Part4'
import Part5 from '../components/Part5'
import Part6 from '../components/Part6'
import Part7 from '../components/Part7'
import moment from 'moment';
import axios from 'axios';


const Permit = () => {
    let { id } = useParams();
    
    console.log("This is userid in permit",id);

    let fetchData = async()=>{
        const response = await axios.post('http://localhost:4000/api/v1/getGeneralPermit', { formId: id });
        console.log("This is the permit response", response);
        if(response){
            setFormData(response.data?.data?.formData)
            console.log("This is formdata after fetching",formData);
        }
    }

    useEffect(()=>{
        
        if(id){
            fetchData();
        }
    },[])
    const defaultFormaData = {
        department:"",
        person_in_charge:"",
        date:"",
        part1: {
            activity_des: "",
            machine_des: ""
        },
        part3: {
            work_contracted: "",
            hot_work: "",
            hazardous_energy: "",
            confined_space: "",
            work_at_height: "",
            movement_of_heavy_eq: "",
            hazardous_material: "",
            GKN_owned_ladder: "",
            GKN_owned_tools: ""
        },
        part4: {
            chemical_hazard: {
                flammable: false,
                toxic: false,
                corrosive: false,
                reactive: false,
                inhalation: false,
                skin_irritant: false,
                doesnt_apply: false,
            },
            physical_hazard: {
                noise: false,
                high_pressure: false,
                pinch_points: false,
                dust: false,
                inert_atmosphere: false,
                thermal_burn: false,
                sharp_edges: false,
                flying_debris: false,
                asbestos: false,
                hand_tools: false,
                fire: false,
                electrical_voltage: false,
                heat_stress: false,
                radiation: false,
                doesnt_apply: false,
            }
        },
        part5: {
            safety_glasses:false,
            dust_mask:false,
            safety_shoes:false,
            SCBA:false,
            hearing_protection:false,
            type:"",
            long_sleeves:false,
            gloves:false,
            respirator:false,
            face_shield:false,
            hard_hat:false,
            confirm_safety:false, 
            agreed_control:false, 
        },
        part6: {
            person_in_charge:{
                mobile:"",
                approval:""
            },
            contract_person:{
                mobile:"",
                approval:"",
            },
            GKN_security:{
                mobile:"",
                approval:"",
            },
            health_safety_manager:{
                mobile:"",
                approval:""
            },
            functional_head:{
                mobile:"",
                approval:"",
            },
            hr_manager:{
                mobile:"",
                approval:"",
            }
        },
        part7: {
            permit_closed:"",
            person_incharge:"",
        }
    }

    const [formData, setFormData] = useState(defaultFormaData);



    const changeHandler = (event)=>{
        const { name, value} = event.target;
        setFormData((prev)=>{
          return {
            ...prev,[name]:value
          };
        })
      }

    const submitHandler = async()=>{
        // console.log(formData);
        const userId = JSON.parse(localStorage.getItem("user"));
        console.log(userId)
        const response = await axios.post('http://localhost:4000/api/v1/createGeneralPermit', {formData,userId});
        console.log("This is the response",response);
        setFormData(defaultFormaData);
    }
    const formattedDate = moment(new Date()).format('YYYY-MM-DD');
    return (
        <div className='bg-slate-200 py-10 flex flex-col justify-center items-center gap-10'>
            <div className='w-[60%] bg-white mx-auto border-2 border-solid border-black'>
                <div className='w-[97%] mx-auto flex flex-col py-8'>
                    {/* header */}
                    <div className='w-[100%] h-[5rem] flex flex-row justify-between'>
                        <div className='w-[30%] h-[80%]'>
                            <img src={logo} alt="" className='w-[100%] h-[100%]' />
                        </div>
                        <div className='flex flex-col text-right'>
                            <p className='font-bold text-2xl'>General Permit to Work</p>
                            <p className='text-md'>To be used for general assessment of risk and permit to work</p>
                        </div>

                    </div>
                    <div className='w-[100%] flex flex-col'>
                        <div className='w-[100%] h-[2rem] flex flex-row'>
                            <div className='w-[33.33%] h-[100%] border-2 border-solid border-black flex flex-row gap-2 items-center px-2'>
                                <label htmlFor="" className='text-md'>Department/Area :</label>
                                <input name="department" onChange={changeHandler} value={formData.department} type="text" className='w-[40%] outline-none' />
                            </div>
                            <div className='w-[33.33%] h-[100%] border-y-2 border-solid border-black flex flex-row gap-2 items-center px-2'>
                                <label htmlFor="" className='text-md'>Person In Charge :</label>
                                <input name="person_in_charge" onChange={changeHandler} value={formData.person_in_charge} type="text" className='w-[40%] outline-none' />
                            </div>
                            <div className='w-[33.33%] h-[100%] border-2 border-solid border-black flex flex-row gap-2 items-center px-2'>
                                <label htmlFor="" className='text-md'>Date :</label>
                                <input name="date" value={formData.date===""?formattedDate:formData.date} onChange={changeHandler} type="date" className='w-[40%] outline-none' />
                            </div>
                        </div>
                        <div className='w-[100%] h-[15rem]'>
                            <Part1 formData={formData} setFormData={setFormData} />
                        </div>
                        <div className='w-[100%] h-[20rem]'>
                            <Part2 formData={formData} setFormData={setFormData} />
                        </div>
                        <div className='w-[100%] h-[18rem]'>
                            <Part3 formData={formData} setFormData={setFormData} />
                        </div>
                        <div className='w-[100%] h-[16rem]'>
                            <Part4 formData={formData} setFormData={setFormData} />
                        </div>
                        <div className='w-[100%] h-[14rem]'>
                            <Part5 formData={formData} setFormData={setFormData} />
                        </div>
                        <div className='w-[100%] h-[14rem]'>
                            <Part6 formData={formData} setFormData={setFormData} />
                        </div>
                        <div className='w-[100%] h-[8rem]'>
                            <Part7 formData={formData} setFormData={setFormData} />
                        </div>
                    </div>
                </div>
            </div>
            {
                id?(<></>):(<div >
                    <button  onClick={submitHandler} className='bg-[#73a0dc] border-2 border-solid border-black text-white font-bold text-2xl py-2 px-5 rounded-lg mx-auto'>Submit</button>
                </div>)
            }
        </div>
    )
}

export default Permit
