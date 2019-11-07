import React, { useState, useEffect } from "react";
import axios from '../../../node_modules/axios';

const PodDisplay = () => {
    const [pod, setPod] = useState([]);
    let date = new Date(pod.date);

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
            <h1>NASA's Photo of the Day for {(date.getMonth()+1)+'/'+(date.getDate()+1)+'/'+date.getFullYear()}</h1>
            <h2 className="title">{pod.title}</h2>
            <p className="copyright">Copyright: {pod.copyright}</p>
            <img className='space-image' alt='space photo of the day'
            src={pod.url} />
            <p className="description">{pod.explanation}</p>
            <p className='previous'>Click HERE to see previous photos</p>
        </div>
    );
};

export default PodDisplay;