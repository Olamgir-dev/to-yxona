import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
function AddRestaurant() {
  const [data, setData] = useState({});
  const navgate = useNavigate()
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setData({ ...data, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('photo', data.photo);
      formData.append('name', data.name);
      formData.append('capacity', data.capacity);
      formData.append('price', data.price);
      formData.append('address', data.address);
      formData.append('generalInformation', data.generalInformation);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      console.log(formData);
      const response = await axios.post('http://localhost:5000/restaurant/add', formData, config);
      Swal.fire(
        'Yaxshi!',
        `To'yxona qo'shildi`,
        'success'
      ).then(() => {
        navgate('/admin/home')
      });
    } catch (error) {
      console.error(error);
      Swal.fire(
        'Xatolik!',
        `${error.message}`,
        'error'
      );
    }
    //Siz malumotlarni xato to\'ldirdingiz
  };
  return (
    <>
      <div className="container" style={{ marginTop: '80px' }}>
        <div className="row">
          <h4 className='text-center'>To'yxona qushish</h4>
          <div className="col-xl-3"></div>
          <div className="col-xl-6">
            <form className='mt-3' onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label">Nom</label>
                <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Nom" name='name' value={data.name || ''} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label">Sig'im</label>
                <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Sig'im" name='capacity' value={data.capacity || ''} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label">Narx</label>
                <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Narx" name='price' value={data.price || ''} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput4" className="form-label">Joylashuv</label>
                <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Joylashuv" name='address' value={data.address || ''} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput5" className="form-label">Surat</label>
                <input type="file" className="form-control" id="exampleFormControlInput5" name='photo' onChange={handleFileChange} />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Umumiy ma'lumot</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="umumiy ma'lumot(ixtyoriy)" value={data.phogeneralInformationto} name='generalInformation' onChange={handleChange}></textarea>
              </div>
              <div className='d-flex justify-content-end'>
                <button className='btn btn-outline-primary'>Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddRestaurant