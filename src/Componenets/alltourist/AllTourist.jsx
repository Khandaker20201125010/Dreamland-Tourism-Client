import { useEffect, useState } from "react";
import TouristCatagory from "../TourisCatagory/TouristCatagory";

const AllTourist = () => {
    const [tourist,settourist] =useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://tourism-management-server-cyan-ten.vercel.app/newtourism');
                const data = await response.json();
                settourist(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    
        fetchData();
    
    }, []);
    return (
        <div className="container m-auto mt-20">
            <div>
                <h1 className="text-4xl font-bold text-center mb-10">Countries </h1>

            </div>
               <div className=' grid md:grid-cols-2 gap-5 mt-10 md:mt-10 lg:grid-cols-3'>
            {
               tourist?.map(tour =><TouristCatagory key={tour._id} tour={tour}></TouristCatagory>)
            }
            
        </div>
        </div>
        

     
    );
};

export default AllTourist;