import React, { useState, useEffect } from "react";
import RoverCards from './RoverCards'
import axios from 'axios';

const Rover = () => {
    const [rover, setRover] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=SbypF7wqPCx8QuOTmLciMQKSZ9kbIYxgdd8RTFMR`)
            .then(response => {
                // console.log(response.data.photos);
                setRover(response.data.photos);
            })
            .catch(error => {
                console.log("Sorry, no data available.", error);
            });
    }, []);
    return (
        <div className="rover">
            <h1>Photos from Mars Rovers</h1>
            <div>
                {rover.map((pic, index) => {
                    console.log(pic)
                    return <RoverCards key={index} imgUrl={pic.img_src} date={pic.earth_date} camera={pic.camera.full_name} rover={pic.rover.name}/>
                })}
            </div>
        </div>
    );
};

export default Rover;