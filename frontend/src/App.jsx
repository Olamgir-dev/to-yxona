import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import AdminLogin from './pages/AdminLogin';
import Home from './pages/Home'
import Layout from './pages/Layout';
import AdminLayout from './pages/AdminLayout';
import NoPage from './pages/NoPages'
import Restaurant from './pages/Restaurant';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/:_id' element={<Restaurant />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route index element={<AdminLogin />} />
            {/* <Route path='/home' element={<Home />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
