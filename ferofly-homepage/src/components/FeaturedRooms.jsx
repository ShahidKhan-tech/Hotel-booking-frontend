import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import First from "../images1/inside/first.webp"
import Second from "../images1/inside/second.webp"
import Third from "../images1/inside/third.webp"
function FeaturedRooms() {
    return (
    <div className="container aboutus">
        <div className="testimony">
             <h1 className="col-md-4 col-12 mx-auto my-2">Gallery</h1>
            <div className="row mb-5">
                <div className="col-md-4 col-12 mx-auto">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
                        <div className="">
                            <div className="carousel-item active text-center">
                                <div className="row">
                                    
                                        <img src={Second} className="text-center img-fluid" width="450" height="400" alt="customer1" />
                                    
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    
                                        <img src={First} className="text-center img-fluid" width="450" height="400" alt="customer2" />
                                
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    
                                        <img src={First} className="text-center img-fluid" width="450" height="400" alt="customer3" />
                                    
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    
                                        <img src={Third} className="text-center img-fluid" width="450" height="400" alt="customer4" />
                                    
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div> 
                </div>
                <div className="col-md-4 col-12 mx-auto">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
                        <div className="">
                            <div className="carousel-item active text-center">
                                <div className="row">
                                    
                                        <img src={First} className="text-center img-fluid" width="450" height="400" alt="customer1" />
                                
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    
                                        <img src={Second} className="text-center img-fluid" width="450" height="400" alt="customer2" />
                                    
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                   
                                        <img src={Third} className="text-center img-fluid" width="450" height="400" alt="customer3" />
                                    
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                   
                                        <img src={First} className="text-center img-fluid" width="450" height="400" alt="customer4" />
                                    
                                    
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div> 
                </div>
                
                <div className="col-md-4 col-12 mx-auto">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
                        <div className="">
                            <div className="carousel-item active text-center">
                                <div className="row">
                                    
                                        <img src={First} className="text-center img-fluid" width="450" height="400" alt="customer1" />
                                    
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    
                                        <img src={Second} className="text-center img-fluid" width="450" height="400" alt="customer2" />
                                    
                                    
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                   
                                        <img src={Third} className="text-center img-fluid" width="450" height="400" alt="customer3" />
                                    
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                   
                                        <img src={Second} className="text-center img-fluid" width="450" height="400" alt="customer4" />
                                    
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div> 
                </div>

            </div>
            
        </div>
    </div>
    )
}
export default FeaturedRooms;
