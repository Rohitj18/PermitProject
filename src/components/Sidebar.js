import React, { useEffect,useState } from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsFillEjectFill, BsFile, BsFileSpreadsheet, BsFiles, BsPersonDash, BsPerson}
 from 'react-icons/bs'
 import { Link,useNavigate } from 'react-router-dom'
 import { IoMdAdd } from "react-icons/io";
function Sidebar({openSidebarToggle, OpenSidebar}) {
    const [isAdmin, setIsAdmin] = useState(false);
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
        if(user.email === "admin1" || user.email === "admin2" || user.email === "admin3"){
            setIsAdmin(true)
        }
  },[])
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsPerson  className='icon'/> Admin
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to={"/Dashboard"}>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Users
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFiles className='icon'/> Forms Accepted 
                </a>
            </li>
            <li className='sidebar-list-item'>
                <Link to={"/formpending"}>
                    <BsFillEjectFill className='icon'/> Forms Pending
                </Link>
            </li>
            {
                isAdmin===false?(<li className='sidebar-list-item'>
                <Link to={"/Permit"}>
                    <IoMdAdd className='icon'/> Create New Permit
                </Link>
            </li>):(<></>)
            }

        </ul>
    </aside>
  )
}

export default Sidebar