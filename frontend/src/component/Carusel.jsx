import React from 'react'


function Carusel() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <img src="https://bazm.uz/storage/2019/7/22trLqLYLWaR_640_425_fit.jpg" className="d-block w-100" style={{height:"400px",objectFit:'cover'}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://avatars.mds.yandex.net/get-altay/4257799/2a0000017c5020a4967ba09c3e8bdbb03cc0/XXL_height" className="d-block w-100" style={{height:"400px",objectFit:'cover'}}  alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" className="d-block w-100" style={{height:"400px",objectFit:'cover'}}  alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carusel