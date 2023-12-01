import React from 'react'

const Part1 = ({formData,setFormData}) => {

  const changeHandler = (event)=>{
    const { name, value, checked, type } = event.target;
    setFormData((prev)=>{
      return {
        ...prev,
        "part1": {...prev.part1,[name]:type === "checkbox" ? checked : value},
      };
    })
  }

  return (
    <div className='w-[100%] h-[100%] flex flex-col border-2 border-solid border-black'>
      {/* header */}
      <div className='w-[100%] h-[10%] px-2 bg-[#73a0dc] '>
        <p className='text-bold text-md my-auto'>Part 1: Basic Information</p>
      </div>
      {/* activity section */}
      <div className='flex flex-row w-[100%] h-[60%] border-y-2 border-solid border-black'>
        <div className='w-[25%] h-[100%] flex justify-center items-center border-r-2 border-solid border-black'>
            <p className='text-bold text-xl'>Activity Description</p>
        </div>
        <div className=' w-[75%] h-[100%] p-1'>
            <textarea name="activity_des" onChange={changeHandler} value={formData.part1.activity_des} id="" className='w-[100%] h-[100%] min-h-[100%] max-h-[100%] outline-none'></textarea>
        </div>
      </div>
      {/* machine description section */}
      <div className='flex flex-row w-[100%] h-[30%] border-solid border-black'>
        <div className='w-[25%] h-[100%] flex justify-center items-center border-r-2 border-solid border-black'>
            <p className='text-bold text-xl'>Machine/Equipment</p>
        </div>
        <div className=' w-[75%] h-[100%] p-1'>
            <textarea name="machine_des" onChange={changeHandler} id="" value={formData.part1.machine_des} className='w-[100%] h-[100%] min-h-[100%] max-h-[100%] outline-none'></textarea>
        </div>
      </div>
    </div>
  )
}

export default Part1
