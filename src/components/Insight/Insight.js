// import React, { useState, useEffect } from "react";
// import axios from '../../../node_modules/axios';

// const Insight = () => {
//     const [insight, setInsight] = useState([]);
//     let date = new Date(insight.date);

//     useEffect(() => {
//         axios
//             .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY`)
//             .then(response => {
//                 console.log(response);
//                 setInsight(response);
//             })
//             .catch(error => {
//                 console.log("Sorry, no data available.", error);
//             });
//     }, []);
//     return (
//         <div className="insight">
//             {/* <h1>NASA's Photo of the Day for {(date.getMonth()+1)+'/'+(date.getDate()+1)+'/'+date.getFullYear()}</h1> */}
//             {/* <h2>{insight.title}</h2> */}
//             {/* <p>Copyright: {insight.copyright}</p> */}
//             {/* <img className='space-image' alt='space photo of the day'
//             src={insight.url} /> */}
//             {/* <p>{insight.explanation}</p> */}
//             {/* <p className='previous'>Click HERE to see previous photos</p> */}
//         </div>
//     );
// };

// export default Insight;