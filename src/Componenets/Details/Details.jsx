import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
const Detailspage = () => {
    const [ DetailsCard, setDetailsCard] = useState({});
    const details =useLoaderData();
    const {id} = useParams();
    useEffect(() => {
          const aCard = details.find(card => card._id == id);
          console.log('details card', aCard);
          setDetailsCard(aCard);

      }, [details, id]);
      console.log(DetailsCard)
    return (
        <div>
            <Helmet>
            <title>Detail Page|| Tourism</title>
            </Helmet>
            <div className="animate__animated animate__bounceInDown mt-5 card lg:card-side bg-base-100 shadow-xl">
                <figure className="w-full"><img src={DetailsCard.Image} alt="Album" /></figure>
                <div className=" p-10 w-3/4">
                    <h2 className="card-title text-2xl">{DetailsCard.TouristSpotName}</h2>
                    <h2 className="font-bold">{DetailsCard.countryName}</h2>
                    <p className="animate__animated animate__bounceInRight mt-5">{DetailsCard.shortDescription}</p>
                    <div className="mt-5">
                    <h className="text-bold text-2xl text-blue-500 mt-5">Price :{DetailsCard.averageCost}</h>
                    </div>
                
                    <div className="flex justify-evenly mt-5">
                    <h className="w-60 bg-green-300  rounded-full font-bold p-2 ">{DetailsCard.countryName}</h>
                    <h className="w-60 bg-green-300 gap-2 flex rounded-full p-2 font-bold" ><IoLocationOutline />{DetailsCard.Location}</h>
                    </div>
                    <div className="flex justify-evenly mt-5">
                    <h className="w-60 bg-green-300  rounded-full font-bold p-2 ">Visitors PerYear :{DetailsCard.TotaVisitorsPerYear}</h>
                    <h className="w-60 bg-green-300 gap-2 flex rounded-full p-2 font-bold" >Traveling Time :{DetailsCard.travelTime}</h>
                    </div>
                   <div className="flex flex-col mt-5">
                   <h className=" bg-orange-300 rounded-full w-20 p-1 ">{DetailsCard.seasonality}</h>
                      <Link to='/AllTouristsSpot'>
                      <button className ="mt-10 ml-2 btn-primary btn rounded-full ">Go back </button>

                      </Link>  
                   </div>
                </div>
            </div>
              
        </div>
    );
};

export default Detailspage;