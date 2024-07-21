import React from 'react'
import carasoulimg1 from '../../../../Images/chair-new-shadow-opt-4.png.webp'
import carasoulimg2 from '../../../../Images/lamp-new-opt-2.png.webp'
import carasoulimg3 from '../../../../Images/slide-3-on-green-sized-opt.png.webp'
const CarasolSlider = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide container-fluid mt-5 mb-2 
         bg-success" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="d-flex">
                        <img src={carasoulimg1} className="img-fluid" alt="..." />
                        <div className="carasoul-text d-inline-flex flex-column align-items-center flex-grow-1 mt-5 justify-content-center">
                            <h6 className='text-capitalize text-white'>product landing page</h6>
                            <h1 t className="text-white">Vitra Chair-Classic Design</h1>
                            <div className="flex">
                                <li className='text-capitalize text-white'>designer</li>
                                <li className='text-capitalize text-white'>materials</li>
                                <li className='text-capitalize text-white'>client</li>
                            </div>
                            <div className="flex">
                                <li className='text-capitalize text-white'>cahrles</li>
                                <li className='text-capitalize text-white'>lucifer</li>
                                <li className='text-capitalize text-white'>tate</li>
                            </div>
                            <div className="flex">
                                <h4>$1999.00</h4>
                                <button>Add to cart</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className="d-flex">
                        <img src={carasoulimg2} class=" img-fluid" alt="..." />
                        <div className="carasoul-text d-inline-flex flex-column align-items-center flex-grow-1 mt-5 justify-content-center">
                            <h6 className='text-capitalize text-white'>product landing page</h6>
                            <h1  className="text-white">Vitra Chair-Classic Design</h1>
                            <div className="flex">
                                <li className='text-capitalize text-white'>designer</li>
                                <li className='text-capitalize text-white'>materials</li>
                                <li className='text-capitalize text-white'>client</li>
                            </div>
                            <div className="flex">
                                <li className='text-capitalize text-white'>cahrles</li>
                                <li className='text-capitalize text-white'>lucifer</li>
                                <li className='text-capitalize text-white'>tate</li>
                            </div>
                            <div className="flex">
                                <h4>$1999.00</h4>
                                <button>Add to cart</button>
                            </div>

                        </div>
                    </div>



                </div>
                <div className="carousel-item">
                    <img src={carasoulimg3} class="d-block w-90 img-fluid " alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default CarasolSlider