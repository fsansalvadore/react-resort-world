import React, { Component } from 'react';
import defaultBg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    // props are coming from react-router-dom and the context API
    constructor(props) {
        super(props)
        // console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBg
        }
    }
    // To access the context
    static contextType = RoomContext;

    // componentDidMount() {}

    render() {
        // destructuring the context
        // get the function getRoom
        const {getRoom} = this.context;
        // get the room 
        const room = getRoom(this.state.slug);
        if(!room) {
            return <div className="error">
                <h3>No such room could be found</h3>
                <Link to="/rooms" className="btn-primary">Go to Rooms</Link>
            </div>
        }
        const {name,description,capacity,size,price,extras,breakfast, pets,images} = room;
        // destructure the images array in a mainImg + rest of the array with the 'rest' operator
        const [mainImg, ...defaultImg] = images;
        return (
            <>
            <StyledHero img={images[0] || this.state.defaultBg} className="roomsHero">
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        Back to Rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {images.map((item,index) => {
                        return <img key={index} src={item} alt={name} />
                    })}
                </div>
                <div className="single-room-info">
                    <article className="description">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price: ${price}</h6>
                        <h6>Size: {size} SQFT</h6>
                        <h6>Max Capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                        <h6>{pets ? 'Pets are allowed' : 'Pets are not allowed'}</h6>
                        <h6>{breakfast && 'free breakfast included'}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item,index) => {
                        return <li key={index}>— {item}</li>
                    })}
                </ul>
            </section>
            </>
        );
    };
}