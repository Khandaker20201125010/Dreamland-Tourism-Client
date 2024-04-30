import { useEffect, useState } from "react";
import TouristCatagory from "../TourisCatagory/TouristCatagory";

const AllTourist = () => {
    const [tourist,settourist] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/newtourism')
        .then(res => res.json())
        .then(data => settourist(data))
    },[])
    return (
        <div className="container m-auto mt-20">
            <div>
                <h1 className="text-4xl font-bold text-center mb-10">Countries </h1>

            </div>
               <div className=' grid md:grid-cols-2 gap-5 mt-10 md:mt-10 lg:grid-cols-3'>
            {
               tourist.map(tour =><TouristCatagory key={tour._id} tour={tour}></TouristCatagory>)
            }
            
        </div>
        </div>
        

     
    );
};

export default AllTourist;