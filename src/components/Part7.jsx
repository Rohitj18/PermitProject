import React from 'react'

const Part7 = ({formData,setFormData}) => {
    const changeHandler = (event)=>{
        const { name, value} = event.target;
        setFormData((prev)=>{
          return {
            ...prev,
            "part7": {...prev.part7,[name]: value},
          };
        })
      }
    return (
        <div className='w-[100%] h-[100%] flex flex-col border-2 border-solid border-black'>
            {/* header */}
            <div className='w-[100%] h-[20%] px-2 bg-[#73a0dc] '>
                <p className='text-bold text-md my-auto'>Part 7: Closing of permit</p>
            </div>
            <div className='w-[100%] h-[30%] flex border-b-2 border-solid border-black'>
                <div className='w-[60%] h-[100%] flex justify-between items-center px-2'>
                    <p className='w-[70%]'>Permits closed and permission withdrawn? </p>
                    <div className=' w-[30%]  flex flex-row gap-1'>
                        <div className='w-[50%] flex flex-row gap-1 justify-center items-center'>
                            <input name='permit_closed' value="true" type="checkbox" checked={formData.part7.permit_closed === "true"?true:false} onChange={changeHandler} />
                            <p>Yes</p>
                        </div>
                        <div className=' w-[50%] flex flex-row gap-1 justify-center items-center'>
                            <input name='permit_closed' value="false" type="checkbox" checked={formData.part7.permit_closed === "false"?true:false} onChange={changeHandler} />
                            <p>No</p>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] h-[100%] flex flex-row border-l-2 border-black border-solid items-center px-2'>
                    <p className='w-[50%]'>GKN person inCharge :</p>
                    <input name="person_incharge" value={formData.part7.person_incharge} type="text" className='w-[50%] outline-none' onChange={changeHandler}/>
                </div>
                
            </div>
            <div className='w-[100%] h-[50%] text-center px-2 font-bold'>
                <p>It is the responsibility of the Leader or GKN Representative to post completed assessment, MSDS, and applicable permits at work location until work is complete and then file with the EHS Department within 24 hours.</p>
            </div>

        </div>
    )
}

export default Part7
