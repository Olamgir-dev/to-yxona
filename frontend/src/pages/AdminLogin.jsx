import React, { useState } from 'react'

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);
    // Formni joylashtirish funksiyasi
    const handleSubmit = e => {
        e.preventDefault();
        // Username va passwordni serverga yuborish
        fetch('/admin/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    // Agar kirish muvaffaqiyatli bo'lsa, sahifani yuklash
                    window.location.href = '/admin/dashboard';
                } else {
                    alert('Login muvaffaqiyatsiz bo\'ldi!');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6">
                        <h4 className='text-center'>Log in</h4>
                        <form action="" className="row g-4">
                            <div className="col-12">
                                <label htmlFor=''>Username<span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <div className="input-group-text"><i className='bx bxs-user fs-4'></i></div>
                                    <input type="text" className="form-control" placeholder="Enter Username" />
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor=''>Password<span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <div className="input-group-text"><i className='bx bxs-lock-alt fs-4'></i></div>
                                    <input type={showPassword ? "text" : "password"} id="password" className="form-control" placeholder="Enter Password" />
                                    <div className="input-group-text">
                                        <input type="checkbox" checked={showPassword} className="form-check-input mt-0" onChange={toggleShowPassword} aria-label="Checkbox for following text input" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3 ">
                                <div className="col-sm-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                                        <label className="form-check-label" htmlFor="inlineFormCheck">Remember me</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <a href="/" className="float-end text-primary">Forgot Password?</a>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-outline-secondary px-4 float-end mt-4">login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin