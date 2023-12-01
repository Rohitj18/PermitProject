import React from 'react'

const Part5 = ({formData,setFormData}) => {

    const changeHandler = (event)=>{
        const { name, value, checked, type} = event.target;
        setFormData((prev)=>{
          return {
            ...prev,
            "part5": {...prev.part5,[name]:type === "checkbox" ? checked : value},
          };
        })
    }

  return (
    <div className='w-[100%] h-[100%] flex flex-col border-2 border-solid border-black'>
            {/* header */}
            <div className='w-[100%] h-[10%] px-2 bg-[#73a0dc] '>
                <p className='text-bold text-md my-auto'>Part 5: Personal Protection Equipment Requirements / Other Controls</p>
            </div>
            <div className='flex flex-col w-[100%] h-[90%] px-3 gap-3 pt-3'>
                {/* chemical section */}
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row gap-1'>
                        <p>Safety glasses</p>
                        <input name="safety_glasses" type="checkbox" checked={formData.part5.safety_glasses} onChange={changeHandler}/>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <p>DustMask</p>
                        <input name="dust_mask" type="checkbox" checked={formData.part5.dust_mask} onChange={changeHandler} />
                    </div>
                    <div className='flex flex-row gap-1'>
                        <p>safety Shoes</p>
                        <input name="safety_shoes" type="checkbox" checked={formData.part5.safety_shoes} onChange={changeHandler} />
                    </div>
                    <div className='flex flex-row gap-1'>
                        <p>SCBA</p>
                        <input name="SCBA" type="checkbox" checked={formData.part5.SCBA} onChange={changeHandler} />
                    </div>
                    <div className='flex flex-row gap-1'>
                        <p>Hearing Protection</p>
                        <input name="hearing_protection" type="checkbox" checked={formData.part5.hearing_protection} onChange={changeHandler} />
                    </div>
                    <div className='flex flex-row gap-1'>
                        <p>Type:</p>
                        <input name="type" value={formData.part5.type} onChange={changeHandler} type="text" className='outline-none underline' />
                    </div>
                    
                </div>
                    
                    <div className='flex flex-row gap-3'>
                        <div className='flex flex-row gap-1'>
                            <p>Long sleeves</p>
                            <input name="long_sleeves" type="checkbox" checked={formData.part5.long_sleeves} onChange={changeHandler}/>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Gloves</p>
                            <input name="gloves" type="checkbox" checked={formData.part5.gloves} onChange={changeHandler} />
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Respirator </p>
                            <input name="respirator" type="checkbox" checked={formData.part5.respirator} onChange={changeHandler}/>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Face Shield</p>
                            <input name="face_shield" type="checkbox" checked={formData.part5.face_shield} onChange={changeHandler} />
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Hard Hat</p>
                            <input name="hard_hat" type="checkbox" checked={formData.part5.hard_hat} onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <input input=""/>
                        <p className='text-blue-500 italic'>Person allowed to work  on this permit -</p>
                        <input className="outline-none" type="text" />
                    </div>
                    <div className='flex flex-row gap-1'>
                        <input name="confirm_safety" type="checkbox" checked={formData.part5.confirm_safety} onChange={changeHandler}/>
                        <p className='text-blue-500 italic'>Confirm Safety induction training complete for above  -</p>
                        <input className="outline-none" type="text" />
                    </div>
                    <div className='flex flex-row gap-1'>
                        <input name="agreed_control" type="checkbox" checked={formData.part5.agreed_control} onChange={changeHandler} />
                        <p className='text-blue-500 italic'>Agreed Control ( if no hazardous work permit requirement )________________</p>
                    </div>

                </div>
            </div>
  )
}

export default Part5
