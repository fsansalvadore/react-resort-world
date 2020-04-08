import React, { Component } from 'react';
import defaultBg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import {RoomContext} from '../context';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                Hello from single room page
            </div>
        )
    }
}
