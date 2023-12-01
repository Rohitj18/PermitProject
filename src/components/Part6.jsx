import React from 'react'

const Part6 = ({formData,setFormData}) => {

  const changeHandler = (event)=>{
    const { name, value, checked, type ,id} = event.target;
    setFormData((prev)=>{
      return {
        ...prev,
        "part6": {...prev["part6"],[id]:{...prev["part6"][id],[name]:type === "checkbox" ? checked : value}},
      };
    })
  }


  return (
    <div className='w-[100%] h-[100%] flex flex-col border-2 border-solid border-black'>
      {/* header */}
      <div className='w-[100%] h-[10%] px-2 bg-[#73a0dc] '>
        <p className='text-bold text-md my-auto'>Part 6: Contact Information & Approval</p>
      </div>
      <div className='w-[100%] h-[90%] flex'>
        <div className='w-[50%] h-[100%] flex flex-col text-md'>
            <div className='text-center border-b-2 border-solid border-black'>Name</div>
            <div className='pl-2 border-b-2 border-solid border-black'>GKN Person in Charge</div>
            <div className='pl-2 border-b-2 border-solid border-black'>Contract Supervisor / Responsible Person</div>
            <div className='pl-2 border-b-2 border-solid border-black'>GKN Security or Medical Services</div>
            <div className='pl-2 border-b-2 border-solid border-black'>Health and Safety Manager</div>
            <div className='pl-2 border-b-2 border-solid border-black'>Functional Head </div>
            <div className='pl-2 border-b-2 border-solid border-black'>HR Manager </div>
        </div>
        <div className='w-[25%] h-[100%] flex flex-col text-md border-x-2 border-solid border-black'>
            <div className='text-center border-b-2 border-solid border-black'>LandLine/Mobile</div>
            <input type='text' onChange={changeHandler} value={formData.part6.person_in_charge.mobile} id="person_in_charge" name='mobile' className='outline-none pl-2 border-b-2 border-solid border-black' />
            <input type='text' onChange={changeHandler} value={formData.part6.contract_person.mobile} id="contract_person" name='mobile' className='outline-none pl-2 border-b-2 border-solid border-black' />
            <input type='text' onChange={changeHandler} value={formData.part6.GKN_security.mobile} id="GKN_security" name='mobile' className='outline-none pl-2 border-b-2 border-solid border-black' />
            <input type='text' onChange={changeHandler} value={formData.part6.health_safety_manager.mobile} id="health_safety_manager" name='mobile' className='outline-none pl-2 border-b-2 border-solid border-black' />
            <input type='text' onChange={changeHandler} value={formData.part6.functional_head.mobile} id="functional_head" name='mobile' className='outline-none pl-2 border-b-2 border-solid border-black' />
            <input type='text' onChange={changeHandler} value={formData.part6.hr_manager.mobile} id="hr_manager" name='mobile' className='outline-none pl-2 border-b-2 border-solid border-black' />
        </div>
        <div className='w-[25%] h-[100%] flex flex-col text-md border-solid border-black'>
            <div className='text-center border-b-2 border-solid border-black'>Approved</div>
            <input type='text' onChange={changeHandler} value={formData.part6.person_in_charge.approval} id="person_in_charge" name="approval" className='outline-none pl-2 border-b-2 border-solid border-black' />
            <input type='text' onChange={changeHandler} value={formData.part6.contract_person.approval} id="contract_person" name="approval" className='outline-none pl-2 border-b-2 border-solid border-black' />
            <input type='text' onChange={changeHandler} value={formData.part6.GKN_security.approval} id="GKN_security" name="approval" className='outline-none pl-2 border-b-2 border-solid border-black' />
            <input type='text' onChange={changeHandler} value={formData.part6.health_safety_manager.approval} id="health_safety_manager" name="approval" className='outline-none pl-2 border-b-2 border-solid border-black' />
            <input type='text' onChange={changeHandler} value={formData.part6.functional_head.approval} id="functional_head" name="approval" className='outline-none pl-2 border-b-2 border-solid border-black' />
            <input type='text' onChange={changeHandler} value={formData.part6.hr_manager.approval} id="hr_manager" name="approval" className='outline-none pl-2 border-b-2 border-solid border-black' />
        </div>
      </div>
    </div>
  )
}

export default Part6
