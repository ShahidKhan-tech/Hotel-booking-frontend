import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,MdLocalDining, FaHiking,GiClothes,FaWifi,FaSwimmingPool , GiCofffeeCup,GiFruitTree,FaBeer} from 'react-icons/fa'


export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "Breakfast",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaSwimmingPool/>,
                title: "Garden",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaSwimmingPool/>,
                title: "Pool",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaWifi/>,
                title: "Free Wi-fi",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaSwimmingPool/>,
                title: "Daily Housekeeping",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaSwimmingPool/>,
                title: "In-Room Dining Service",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
           
        ]
    }
    render() {
        return (
            <div className="container-fluid services bg-white">
               
             <Title title="Services" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-3 col-lg-4 col-12 mx-auto my-3" key={index}>
                            <div className="card  border-0 p-4">
                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}