import React from 'react'
import { Outlet } from "react-router-dom";
import AdminNavbar from '../component/AdminNavbar';
import Footer from '../component/Footer';
function AdminLayout() {
    return (
        <>
            <AdminNavbar />
            <Outlet />
            <Footer/>
        </>
    )
}

export default AdminLayout