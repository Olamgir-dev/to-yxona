import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import AdminLogin from './pages/AdminLogin';
import Home from './pages/Home'
import Layout from './pages/Layout';
import AdminLayout from './pages/AdminLayout';
import NoPage from './pages/NoPages'
import Restaurant from './pages/Restaurant';
import AddRestaurant from './pages/AddRestaurant';
import AdminHome from './pages/AdminHome';
import AdminRestaurant from './pages/AdminRestaurant';
function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    const user = sessionStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/:_id' element={<Restaurant />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path='admin' element={<AdminLayout />}>
            <Route index element={<AdminLogin />} />
            <Route path='home' element={<AdminHome />} />
            <Route path='add' element={<AddRestaurant />} />
            <Route path=':_id' element={<AdminRestaurant />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
