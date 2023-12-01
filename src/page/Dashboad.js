import React,{useState} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Cards from '../components/Cards'
import Home from '../components/Home'
import { Routes, Route,useLocation } from 'react-router-dom'


function Dashboad() {
    let location = useLocation();
    let currPath = location.pathname.split("/").at(-1);
    console.log("This is the currPath",currPath)
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className='flex flex-row'>
        <div>
          {
            currPath==="Dashboard"?(<Home/>):currPath ==="formpending"?(<Cards/>):(<></>)
          }
          
          
        </div>
      </div>
    </div>
  )
}

export default Dashboad