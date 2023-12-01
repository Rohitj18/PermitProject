import React from 'react'

const Part4 = ({formData,setFormData}) => {
    

    const changeHandler = (event)=>{
        const { name, value, checked, type ,id} = event.target;
        
        setFormData((prev)=>{
            console.log("changevalue ",prev["part4"][id]);
          return {
            ...prev,
            "part4": {...prev["part4"],[id]:{...prev["part4"][id],[name]:type === "checkbox" ? checked : value}},
          };
        })
    }

    return (
        <div className='w-[100%] h-[100%] flex flex-col border-2 border-solid border-black'>
            {/* header */}
            <div className='w-[100%] h-[10%] px-2 bg-[#73a0dc] '>
                <p className='text-bold text-md my-auto'>Part 4:Chemicals and Physical Hazard Specifics</p>
            </div>
            <div className='flex flex-col w-[100%] h-[90%] px-3 gap-3'>
                {/* chemical section */}
                <p className='font-bold underline '>Chemical Hazards:</p>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row gap-1'>
                        <p>Flammable</p>
                        <input id="chemical_hazard" name="flammable" type="checkbox" checked={formData.part4.chemical_hazard.flammable} onChange={changeHandler} />
                    </div>
                    <div className='flex flex-row gap-1'>
                        <p>Toxic</p>
                        <input id="chemical_hazard" name="toxic" type="checkbox" checked={formData.part4.chemical_hazard.toxic} onChange={changeHandler} />
                    </div>
                    <div className='flex flex-row gap-1'>
                        <p>Corrosive</p>
                        <input id="chemical_hazard" name="corrosive" type="checkbox" checked={formData.part4.chemical_hazard.corrosive} onChange={changeHandler} />
                    </div>
                    <div className='flex flex-row gap-1'>
                        <p>Reactive</p>
                        <input id="chemical_hazard" name="reactive" type="checkbox" checked={formData.part4.chemical_hazard.reactive} onChange={changeHandler}/>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <p>Inhalation</p>
                        <input id="chemical_hazard" name="inhalation" type="checkbox" checked={formData.part4.chemical_hazard.inhalation} onChange={changeHandler} />
                    </div>
                    <div className='flex flex-row gap-1'>
                        <p>Skin Irritant</p>
                        <input id="chemical_hazard" name="skin_irritant" type="checkbox" checked={formData.part4.chemical_hazard.skin_irritant} onChange={changeHandler} />
                    </div>
                    <div className='flex flex-row gap-1'>
                        <p>Doesn’t Apply</p>
                        <input id="chemical_hazard" name="doesnt_apply" type="checkbox" checked={formData.part4.chemical_hazard.doesnt_apply} onChange={changeHandler} />
                    </div>
                </div>
                    {/* physical hazard  */}
                    <p className='font-bold underline '>Physical Hazards.  List the hazards of the area, the work and the equipment for the specific task:</p>
                    <div className='flex flex-row gap-3'>
                        <div className='flex flex-row gap-1'>
                            <p>{`Noise (>80dbA)`}</p>
                            <input id="physical_hazard" name="noise" type="checkbox" checked={formData.part4.physical_hazard.noise} onChange={changeHandler}/>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>High Pressure</p>
                            <input id="physical_hazard" name="high_pressure" type="checkbox" checked={formData.part4.physical_hazard.high_pressure} onChange={changeHandler} />
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Pinch Points </p>
                            <input id="physical_hazard" name="pinch_points" type="checkbox" checked={formData.part4.physical_hazard.pinch_points} onChange={changeHandler} />
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Dust</p>
                            <input id="physical_hazard" name="dust" type="checkbox" checked={formData.part4.physical_hazard.dust} onChange={changeHandler} />
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Inert Atmosphere </p>
                            <input id="physical_hazard" name="inert_atmosphere" type="checkbox" checked={formData.part4.physical_hazard.inert_atmosphere} onChange={changeHandler} />
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Thermal Burn </p>
                            <input id="physical_hazard" name="thermal_burn" type="checkbox" checked={formData.part4.physical_hazard.thermal_burn} onChange={changeHandler} />
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Sharp Edges </p>
                            <input id="physical_hazard" name="sharp_edges" type="checkbox" checked={formData.part4.physical_hazard.sharp_edges} onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-row gap-1'>
                            <p>Flying Debris</p>
                            <input id="physical_hazard" name="flying_debris" type="checkbox" checked={formData.part4.physical_hazard.flying_debris} onChange={changeHandler} />
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Asbestos</p>
                            <input id="physical_hazard" name="asbestos" type="checkbox" checked={formData.part4.physical_hazard.asbestos} onChange={changeHandler} />
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Hand Tools </p>
                            <input id="physical_hazard" name="hand_tools" type="checkbox" checked={formData.part4.physical_hazard.hand_tools} onChange={changeHandler} />
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Fire</p>
                            <input id="physical_hazard" name="fire" type="checkbox" checked={formData.part4.physical_hazard.fire} onChange={changeHandler} />
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Electrical/High Voltage </p>
                            <input id="physical_hazard" name="electrical_voltage" type="checkbox" checked={formData.part4.physical_hazard.electrical_voltage} onChange={changeHandler}/>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Heat Stress </p>
                            <input id="physical_hazard" name="heat_stress" type="checkbox" checked={formData.part4.physical_hazard.heat_stress} onChange={changeHandler} />
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p>Radiation </p>
                            <input id="physical_hazard" name="radiation" type="checkbox" checked={formData.part4.physical_hazard.radiation} onChange={changeHandler} />
                        </div>
                        
                    </div>
                    <div className='flex flex-row gap-1'>
                        <p>Doesnt Apply</p>
                        <input id="physical_hazard" name="doesnt_apply" type="checkbox" checked={formData.part4.physical_hazard.doesnt_apply} onChange={changeHandler} />
                    </div>

                </div>
            </div>
            )
}

            export default Part4
