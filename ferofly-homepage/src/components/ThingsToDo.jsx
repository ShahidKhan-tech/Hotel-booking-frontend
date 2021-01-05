import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking , FaShuttleVan,FaBeer} from 'react-icons/fa'


export default class ThingsToDo extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "Winaries Tour",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaHiking/>,
                title: "Cultural Sites",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaShuttleVan/>,
                title: "Market Tour",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaBeer/>,
                title: "Leisure Activities",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaBeer/>,
                title: "Birds Safaries",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaBeer/>,
                title: "Horse Riding",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
           
        ]
    }
    render() {
        return (
            <div className="container-fluid services bg-white bg-transparent">
               
             <Title title="Things To Do" />
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