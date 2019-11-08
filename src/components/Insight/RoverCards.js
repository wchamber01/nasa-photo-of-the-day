import React from "react";

const RoverCards = props => {
    return (
        <div className='rover-card'>
            <img className='rover-image'src={props.imgUrl}/>
            <p>Photo taken on earth date: {props.date} from the {props.camera} on the {props.rover} rover.</p>
        </div>
    )
}

export default RoverCards