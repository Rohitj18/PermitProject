import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {    
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>USERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>69</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>NOTIFICATION</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>
    </main>
  )
}

export default Home