import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottileone from "../Lottieone/Lottileone";



const ToursumSelectCard = () => {
    const [toursim,setToursim] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/torisum')
        .then(res => res.json())
        .then(data => setToursim(data))
    },[])
    const sliceItem = toursim.slice(0,6)
    return (
        <div className="text-center m-auto items-center align-middle">
            <div className="h-full ml-[550px] mt-5">
          <Lottileone></Lottileone>

          </div>
            <div>
            <h2 className="text-2xl font-bold text-center mt-10 mb-5"> Tourist Spot</h2>
            <p className="text-xl text-center m-auto md:w-2/3  mt-5 font-bold">Introducing a tourist website involves capturing the essence of wanderlust, adventure, and discovery that drives travelers to explore the world. </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-10">
            
                 
                {
                    sliceItem.map(slItem =>    <div key={slItem._id} data-aos="zoom-in" className='border p-5 flex flex-col shadow-lg rounded-md'>
                         <div className='flex justify-center items-center'>
                              <img className='w-72 h-48 rounded-md border mb-5' src={slItem.Image} alt="" />
                           </div>
                           
                          <div className='flex-grow'>
                           <h2 className='text-2xl font-bold mb-5'>{slItem.TouristSpotName}</h2>
                          <h2 className='text-2xl font-bold  '>Category: <span className='text-2xl font-bold text-red-400'>{slItem.countryName}</span></h2>
                           <div className='my-5 flex justify-between items-center '>
                              <p className='font-bold'>Price : {slItem.averageCost}</p>
                              <p className='font-bold flex gap-2'>Rating : <span className='text-yellow-700 text-xl'>{slItem.Location}</span></p>
                         </div>
                           <div className='my-5  '>
                             <p className='font-bold mb-3'>Item Type : {slItem.seasonality}</p>
                              <p className='font-bold mb-3'>Processing Time : {slItem.TotaVisitorsPerYear} days</p>
                              <p className='font-bold flex gap-2'>Customization : <span className='text-red-500'>{slItem.travelTime}</span></p>
                          </div>
            
                           </div>
                           <Link to={`/torisum/${slItem._id}`}><button className='bg-blue-500 px-4 py-2 rounded-md w-full text-bold text-white'>View More</button></Link>
                      </div>)
                }
            </div>
        </div>
        </div>
    );
};

export default ToursumSelectCard;