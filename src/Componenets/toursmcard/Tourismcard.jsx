
import { Link } from 'react-router-dom';

const Tourismcard = ({ tourism }) => {
    const { _id,
        Image, TouristSpotName,
        countryName, subcategoryName, averageCost, seasonality, TotaVisitorsPerYear, travelTime } = tourism;
    return (
        <div className='mt-5 ml-5 '>
            <div data-aos="zoom-in" className='border p-5 flex flex-col shadow-lg rounded-md'>
                <div className='flex justify-center items-center'>
                    <img className='w-96 h-48 rounded-md border mb-5' src={Image} alt="" />
                </div>
                <div className='flex-grow'>
                    <h2 className='text-2xl font-bold mb-5'>{TouristSpotName}</h2>
                    <h2 className='text-2xl font-bold  '>
                        CountryName:{countryName} <span className='text-2xl font-bold text-red-400'>{subcategoryName}</span></h2>
                    <div className='my-5 flex justify-between items-center '>
                        <p className='font-bold'>Price : {averageCost}TK</p>
                        <p className='font-bold flex gap-2'>Seasonality: <span className='text-blue-700 text-xl'>{seasonality}</span></p>
                    </div>
                    <div className='my-5  '>
                        <p className='font-bold mb-3'>TotaVisitorsPerYear : {TotaVisitorsPerYear}</p>
                        <p className='font-bold mb-3'> Travel_time : {travelTime}</p>
                    </div>

                </div>
                <Link to={`/torisum/${_id}`}><button className='bg-green-500 px-4 py-2 rounded-md w-full text-bold text-white'>View More</button></Link>


            </div>
        </div>
    );
};

export default Tourismcard;