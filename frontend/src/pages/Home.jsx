import React, { useEffect, useState } from 'react'
import Card from '../component/Card'
import Carusel from "../component/Carusel";
import restaurant, { setRestaurant } from '../redux/reducers/restaurant.js';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
function Home() {
  const [load, setLoad] = useState(false)
  const dispatch = useDispatch();
  const restaurants = useSelector(state => state.restaurant.array);
  // const sortRestaurants = restaurants?.sort((a,b)=>b.price-b.price);
  // console.log(sortRestaurants)
  useEffect(() => {
    axios
      .get('http://localhost:5000/restaurant')
      .then(res => {
        console.log(res.data);
        dispatch(setRestaurant(res.data))
        setLoad(true)
      })
    return () => {
      setLoad(false)
    }
  }, [])
  return (
    <>{
      load ? <>
        <div className="container-fluid mt-5">
          <Carusel />
        </div>
        <div className="container">
          <div className="row ms-5">
            {
              restaurants.map((restaurant) => {
                return (
                  <Card key={restaurant._id} data={restaurant} />
                )
              })
            }
          </div>
        </div>
      </> :
        <h1 style={{ height: "80vh" }} className='w-100'>
          <i style={{ position: "fixed", top: "45vh", left: "50vw", zIndex: 12, fontSize: "100px" }} className='bx bx-loader bx-spin bx-flip-horizontal' ></i>
        </h1>
    }
    </>
  )
}

export default Home