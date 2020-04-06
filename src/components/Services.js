import React, {Component} from 'react';
import Title from './Title';
import {FaCocktail, FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import { render } from '@testing-library/react';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "Free cocktails",
                info: "Lorem ipsum dolor sit amet lorem ipsum lollium cocktail"
            },
            {
                icon:<FaHiking/>,
                title: "Best Hiking",
                info: "Lorem ipsum dolor sit amet lorem ipsum lollium cocktail"
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free Shuttle Service",
                info: "Lorem ipsum dolor sit amet lorem ipsum lollium cocktail"
            },
            {
                icon:<FaBeer/>,
                title: "Strongest Beers",
                info: "Lorem ipsum dolor sit amet lorem ipsum lollium cocktail"
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
