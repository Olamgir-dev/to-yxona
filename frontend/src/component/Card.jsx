import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Card.scss'
function Card(props) {
  const data = props.data;
  return (
    <>
      <div className="border rounded mb-3 col-md-6 col-xl-3 mt-5 position-relative" >
        <img className="image w-100" style={{ height: "400px", objectFit: 'cover' }} src={data.imageUrl} alt="" />
        <div className=" position-absolute top-50 start-50  middle">
          <h6 className=" text-light text-uppercase">${data.price}</h6>
          <h3 className="text-light mb-3">{data.name}</h3>
          <Link to={`/${data._id}`} className="btn btn-outline-primary">More</Link>
        </div>
      </div>
    </>
  )
}

export default Card