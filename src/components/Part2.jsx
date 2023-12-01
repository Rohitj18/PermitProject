import React from 'react'

const Part2 = ({formData,setFormData}) => {
  return (
    <div className='w-[100%] h-[100%] flex flex-col border-2 border-solid border-black'>
      {/* header */}
      <div className='w-[100%] h-[10%] px-2 bg-[#73a0dc] '>
        <p className='text-bold text-md'>Part 2: Hazard To Conisder During Work Assignment</p>
      </div>
      <div className='w-[100%] h-[90%] flex flex-row'>
        {/* left column */}
        <div className='w-[45%] h-[100%] flex flex-col'>
          <div className='font-bold text-sm px-2 border-b-2 border-black border-solid w-[100%] h-[15%]'>What significant hazards exist or could arise from the work activity?</div>
          <div className='w-[100%] h-[85%] flex px-2'>
            <div className='w-[50%] h-[100%] flex flex-col'>
              <p>Slip or Trip</p>
              <p>Electricity</p>
              <p>Dust</p>
              <p>Moving part</p>
              <p>Stored Energy</p>
              <p>Height</p>
              <p>Mobile equipment</p>
              <p>High/low temperature</p>
              <p>Uncomfortable posture</p>
              <p>Manual Handling</p>
            </div>
            <div className='w-[50%] h-[100%] flex flex-col'>
              <p>Flammable materials</p>
              <p>Chemicals</p>
              <p>Fumes</p>
              <p>Ejection of materials</p>
              <p>Pressure systems</p>
              <p>Confined space</p>
              <p>Noise/vibration</p>
              <p>Poor lighting</p>
              <p>Hazardous waste</p>
              <p>Repetitive motion</p>
            </div>
          </div>
        </div>
        {/* middle column */}
        <div className='w-[20%] h-[100%] border-x-2 border-solid border-black flex flex-col'>
          <div className='font-bold text-sm px-2 border-b-2 border-black border-solid w-[100%] h-[15%]'>Who or what could be harmed?</div>
          <div className='w-[100%] h-[100%] flex flex-col px-2'>
            <p>Operator</p>
            <p>Office staff</p>
            <p>Maintenance person</p>
            <p>Lone worker</p>
            <p>Contractor</p>
            <p>Visitor</p>
            <p>Building/property</p>
            <p>Environment</p>
          </div>
        </div>
        {/* right column */}
        <div className='w-[35%] h-[100%] flex flex-col'>
          <div className='font-bold text-sm px-2 border-b-2 border-black border-solid w-[100%] h-[15%]'>How serious is the risk before actions or precautions are taken?</div>
          <div className='w-[100%] h-[100%] flex flex-col px-2'>
            <p>Critical (i.e. permanent disability)</p>
            <p>Maintenance person</p>
            <p>Major (i.e. lost time)</p>
            <p>Moderate (i.e. medical treatment)</p>
            <p>Minor (i.e. first aid)</p>
          </div>
        </div>

      </div>



    </div>
  )
}

export default Part2
