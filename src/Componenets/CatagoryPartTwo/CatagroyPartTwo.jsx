import { Link } from "react-router-dom";

const CatagroyPartTwo = ({tour}) => {
    return (
        <div>
            <div className='mt-5 ml-5 '>
                <div data-aos="zoom-in" className='border p-5 flex flex-col shadow-lg rounded-md'>
                    <div className='flex justify-center items-center'>
                        <img className='w-96 h-48 rounded-md border mb-5' src={tour.Image} alt="" />
                    </div>
                    <div className='flex-grow'>
                        <h2 className='text-2xl font-bold  '>
                            CountryName:{tour.countryName} <span className='text-2xl font-bold text-red-400'>{tour.subcategoryName}</span></h2>
                        <div className='my-5 flex justify-between items-center '>
                            <p className='font-bold'>Price : {tour.averageCost}TK</p>
                            <p className='font-bold flex gap-2'>Seasonality: <span className='text-blue-700 text-xl'>{tour.seasonality}</span></p>
                        </div>
                        <div className='my-5  '>
                            <p className='font-bold mb-3'>TotaVisitorsPerYear : {tour.TotaVisitorsPerYear}</p>
                            <p className='font-bold mb-3'> Travel_time : {tour.travelTime}</p>
                        </div>

                    </div>
                    <Link to={`/torisum/${tour._id}`}><button className='bg-green-500 px-4 py-2 rounded-md w-full text-bold text-white'>View More</button></Link>


                </div>
            </div>

        </div>
    );
};

export default CatagroyPartTwo;