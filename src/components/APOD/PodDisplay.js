import React, { useState, useEffect } from "react";
import axios from '../../../node_modules/axios';

const PodDisplay = () => {
    const [pod, setPod] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=SbypF7wqPCx8QuOTmLciMQKSZ9kbIYxgdd8RTFMR`)
            .then(response => {
                console.log(response.data);
                setPod(response.data);
            })
            .catch(error => {
                console.log("Sorry, no photo available.", error);
            });
    }, []);
    return (
        <div className="APOD">
            <h1>NASA's Photo of the Day for {pod.date}</h1>
            <h2>{pod.title}</h2>
            <img className='space-image' alt='space photo of the day'
            src={pod.url} />
            <p>{pod.explanation}</p>
            <p className='previous'>Click HERE to see previous photos</p>
        </div>
    );
};

export default PodDisplay;