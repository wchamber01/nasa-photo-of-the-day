import React, { useState, useEffect } from "react";
import APOD_Data from "./POD_Display";
import axios from "axios";

export default function APOD_Layout() {
    const [POD, setPOD] = useState();

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=SbypF7wqPCx8QuOTmLciMQKSZ9kbIYxgdd8RTFMR`)
            .then(response => {
                console.log(response);
                setPOD(response);
            })
            .catch(error => {
                console.log("Sorry, no photo available.", error);
            });
    }, []);
    return (
        <div className="container">
            {/* <button onClick={() => setBreed("mastiff")}>Mastiff</button> */}
            {/* <button onClick={() => setBreed("labrador")}>Labrador</button> */}
            {/* <div className="entry">
                {pets.map((pet, index) => {
                    return <PetCard key={index} imgUrl={pet} breed={breed} />;
                })}
            </div> */}
        </div>
    );
}