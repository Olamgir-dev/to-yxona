import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom'
function AdminRestaurant() {
    const [data, setData] = useState()
    const [book, setBook] = useState()
    const [load, setLoad] = useState(false)
    const { _id } = useParams()
    console.log(book?.$d)
    useEffect(() => {
        axios
            .get(`http://localhost:5000/restaurant/${_id}`)
            .then((response) => {
                setData(response.data)
                setLoad(true)
            })
            .catch((error) => {
                console.log(error);
            })
        return () => {
            setLoad(false)
        }
    }, [])

    const bookDate = () => {
        axios
            .put(`http://localhost:5000/restaurant/${_id}`,{book})
            .then((response) => {
                setData(response.data)
                setLoad(true)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            {load ? <div className="container" style={{ marginTop: '80px' }}>
                <h4 className='text-center'>{data?.name}</h4>
                <div className="row">
                    <div className="col-xl-6 " >
                        <img className='w-100 rounded' style={{ height: '500px', objectFit: 'cover' }} src={data?.imageUrl} alt="404" />
                    </div>
                    <div className="col-xl-6 ">
                        <h1 className='fw-bold'>Nomi:{data?.name}</h1>
                        <h4>Sig'mi: {data?.capacity} -ta</h4>
                        <h5>Narxi: ${data?.price}</h5>
                        <div className='w-100 ms-0' >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                {/* <StaticDatePicker orientation="landscape" /> */}
                                <StaticDatePicker
                                    displayStaticWrapperAs="desktop"
                                    // value={dayjs()}
                                    orientation="landscape"
                                    onChange={(newValue) => setBook(newValue)}
                                // renderInput={(params) => <TextField {...params} />
                                // }
                                />
                            </LocalizationProvider>
                        </div>
                        <div className="row">
                            <button>btn</button>
                            <button>btn</button>
                            <button>btn</button>
                        </div>
                    </div>
                </div>
            </div> :
                <h1 style={{ height: "80vh" }} className='w-100'>
                    <i style={{ position: "fixed", top: "45vh", left: "50vw", zIndex: 12, fontSize: "100px" }} className='bx bx-loader bx-spin bx-flip-horizontal' ></i>
                </h1>
            }

        </>
    )
}

export default AdminRestaurant