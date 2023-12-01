import React from 'react'

const Part3 = ({formData,setFormData}) => {


    const changeHandler = (event)=>{
        const { name, value} = event.target;
        setFormData((prev)=>{
          return {
            ...prev,
            "part3": {...prev.part3,[name]: value},
          };
        })
      }

  return (
    <div className='w-[100%] h-[100%] flex flex-col border-2 border-solid border-black'>
      {/* header */}
      <div className='w-[100%] h-[10%] px-2 bg-[#73a0dc] '>
        <p className='text-bold text-md my-auto'>Part 3: Hazardous Work Requirements</p>
      </div>
      <div className='w-[100%] h-[90%] flex'>
        <div className='w-[50%] h-[100%] flex flex-col'>
            <p className='font-bold text-center border-r-2 border-b-2 border-black border-solid'>Hazardous Work</p>
            <div className='flex border-b-2 border-r-2 border-black border-solid px-2 justify-between'>
                <p>Is the work contracted?  </p>
                <div className='flex flex-row gap-3'>
                    <div className='flex flex-row gap-1'>
                        <input name='work_contracted' value="true" type="checkbox" checked={formData.part3.work_contracted === "true"?true:false} onChange={changeHandler}/>
                        <p>Yes</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <input name='work_contracted' value="false" type="checkbox" checked={formData.part3.work_contracted === "false"?true:false} onChange={changeHandler}/>
                        <p>No</p>
                    </div>
                </div>
            </div>
            <div className='flex border-b-2 border-r-2 border-black border-solid px-2 justify-between'>
                <p>Hot work involved?  </p>
                <div className='flex flex-row gap-3'>
                    <div className='flex flex-row gap-1'>
                        <input type="checkbox" name='hot_work' value="true" checked={formData.part3.hot_work === "true"?true:false} onChange={changeHandler}/>
                        <p>Yes</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <input name='hot_work' value="false" type="checkbox" checked={formData.part3.hot_work === "false"?true:false} onChange={changeHandler} />
                        <p>No</p>
                    </div>
                </div>
            </div>
            <div className='flex border-b-2 border-r-2 border-black border-solid px-2 justify-between'>
                <p>Hazardous energy involved?    </p>
                <div className='flex flex-row gap-3'>
                    <div className='flex flex-row gap-1'>
                        <input name='hazardous_energy' value="true" type="checkbox" checked={formData.part3.hazardous_energy === "true"?true:false} onChange={changeHandler}/>
                        <p>Yes</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <input name='hazardous_energy' value="false" type="checkbox" checked={formData.part3.hazardous_energy === "false"?true:false} onChange={changeHandler} />
                        <p>No</p>
                    </div>
                </div>
            </div>
            <div className='flex border-b-2 border-r-2 border-black border-solid px-2 justify-between'>
                <p>Confined space involved?    </p>
                <div className='flex flex-row gap-3'>
                    <div className='flex flex-row gap-1'>
                        <input name='confined_space' value="true" type="checkbox" checked={formData.part3.confined_space === "true"?true:false} onChange={changeHandler} />
                        <p>Yes</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <input name='confined_space' value="false" type="checkbox" checked={formData.part3.confined_space === "false"?true:false} onChange={changeHandler} />
                        <p>No</p>
                    </div>
                </div>
            </div>
            <div className='flex border-b-2 border-r-2 border-black border-solid px-2 justify-between'>
                <p>Work at heights or roof work involved?    </p>
                <div className='flex flex-row gap-3'>
                    <div className='flex flex-row gap-1'>
                        <input name='work_at_height' value="true" type="checkbox" checked={formData.part3.work_at_height === "true"?true:false} onChange={changeHandler} />
                        <p>Yes</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <input name='work_at_height' value="false" type="checkbox" checked={formData.part3.work_at_height === "false"?true:false} onChange={changeHandler} />
                        <p>No</p>
                    </div>
                </div>
            </div>
            <div className='flex border-b-2 border-r-2 border-black border-solid px-2 justify-between'>
                <p>Movement of heavy equipment involved?    </p>
                <div className='flex flex-row gap-3'>
                    <div className='flex flex-row gap-1'>
                        <input name='movement_of_heavy_eq' value="true" type="checkbox" checked={formData.part3.movement_of_heavy_eq === "true"?true:false} onChange={changeHandler} />
                        <p>Yes</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <input name='movement_of_heavy_eq' value="false" type="checkbox" checked={formData.part3.movement_of_heavy_eq === "false"?true:false} onChange={changeHandler} />
                        <p>No</p>
                    </div>
                </div>
            </div>
            <div className='flex border-b-2 border-r-2 border-black border-solid px-2 justify-between'>
                <p>Chemicals or hazardous materials used?  </p>
                <div className='flex flex-row gap-3'>
                    <div className='flex flex-row gap-1'>
                        <input name='hazardous_material' value="true" type="checkbox" checked={formData.part3.hazardous_material === "true"?true:false} onChange={changeHandler} />
                        <p>Yes</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <input name='hazardous_material' value="false" type="checkbox" checked={formData.part3.hazardous_material === "false"?true:false} onChange={changeHandler} />
                        <p>No</p>
                    </div>
                </div>
            </div>
            <div className='flex border-b-2 border-r-2 border-black border-solid px-2 justify-between'>
                <p>Using GKN-owned ladders?  </p>
                <div className='flex flex-row gap-3'>
                    <div className='flex flex-row gap-1'>
                        <input name='GKN_owned_ladder' value="true" type="checkbox" checked={formData.part3.GKN_owned_ladder === "true"?true:false} onChange={changeHandler} />
                        <p>Yes</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <input name='GKN_owned_ladder' value="false" type="checkbox" checked={formData.part3.GKN_owned_ladder === "false"?true:false} onChange={changeHandler} />
                        <p>No</p>
                    </div>
                </div>
            </div>
            <div className='flex border-r-2 border-black border-solid px-2 justify-between'>
                <p>Using GKN-owned tools?  </p>
                <div className='flex flex-row gap-3'>
                    <div className='flex flex-row gap-1'>
                        <input name='GKN_owned_tools' value="true" type="checkbox" checked={formData.part3.GKN_owned_tools === "true"?true:false} onChange={changeHandler} />
                        <p>Yes</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <input name='GKN_owned_tools' value="false" type="checkbox" checked={formData.part3.GKN_owned_tools === "false"?true:false} onChange={changeHandler} />
                        <p>No</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[50%] h-[100%] flex flex-col'>
            <p className='font-bold text-center border-b-2 border-black border-solid'>Requirements</p>
            <p className='border-b-2 border-solid border-black px-2'>Contractor, Supplier, Vendor Procedure and Orientation</p>
            <p className='border-b-2 border-solid border-black px-2'>Hot work permit</p>
            <p className='border-b-2 border-solid border-black px-2'>Energized Electrical Work Permit</p>
            <p className='border-b-2 border-solid border-black px-2'>Declassification of Confined Space Permit</p>
            <p className='border-b-2 border-solid border-black px-2'>Work at Heights and or Roof Access Permit</p>
            <p className='border-b-2 border-solid border-black px-2'>Machine Move Permit</p>
            <p className='border-b-2 border-solid border-black px-2'>SDS Approval from EHS</p>
            <p className='border-b-2 border-solid border-black px-2'>Ladder Use Training</p>
            <p className='px-2'>Authorization from Site Service Maintenance</p>

        </div>

      </div>
      
    </div>
  )
}

export default Part3
