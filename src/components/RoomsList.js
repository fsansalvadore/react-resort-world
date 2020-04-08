import React from 'react';
import Room from './Room';

export default function RoomsList({rooms}) {
    if(rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>No rooms matched the search parameters.</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item => {
                        return <Room key={rooms.id} room={item} />;
                    })
                }
            </div>
        </section>
    )
}
