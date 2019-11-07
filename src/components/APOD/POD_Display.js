import React, { useState, useEffect } from "react";
import axios from 'axios';

const POD_Display = () => {
    const [POD, setPOD] = useState();

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=SbypF7wqPCx8QuOTmLciMQKSZ9kbIYxgdd8RTFMR`)
            .then(response => {
                console.log(response.data);
                setPOD(response.data);
            })
            .catch(error => {
                console.log("Sorry, no photo available.", error);
            });
    }, []);
    return (
        <div className="APOD">
            <h1>NASA's Photo of the Day</h1>
            {/* <h2>{POD.title}</h2>
            <p>{POD.date}</p>
            <img className='space-image' alt='space image of the day'
            src={POD.imgUrl} />
            <p>{POD.description}</p> */}
            <p className='previous'>Click HERE to see previous photos</p>
        </div>
    );
};

export default POD_Display;