import React from "react";

const InsightCards = props => {
    return (
        <div className='insight-card'>
            <img className='insight-image'src={props.imgUrl}/>
            <p>Date: {props.earth_date}</p>
        </div>
    )
}

export default InsightCards