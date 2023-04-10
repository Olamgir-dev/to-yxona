import React from 'react'
import { Outlet } from "react-router-dom";
import AdminNavbar from '../component/AdminNavbar';
function AdminLayout() {
    return (
        <>
            <AdminNavbar />
            <Outlet />
           
        </>
    )
}

export default AdminLayout