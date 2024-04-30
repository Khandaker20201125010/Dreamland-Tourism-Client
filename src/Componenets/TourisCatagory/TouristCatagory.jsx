import { Link } from 'react-router-dom';

const TouristCatagory = ({ tour }) => {
    return (
        <div className=' flex flex-grow'>
            <div className="shadow-xl p-5 flex flex-col rounded-md flex-grow">
                <div className='flex justify-center items-center'>
                    <img className='w-72 h-48 rounded-md border mb-5' src={tour.Image} alt="" />
                </div>
                    <div className='my-5 flex flex-col flex-grow'>
                        <h2 className='text-2xl font-bold  '>Country name: <span className='text-2xl font-bold text-red-400'>{tour.countryName}</span></h2>
                        <p>{tour.shortDescription}</p>
                    </div>
                <Link to={`/Catagoryextra/${tour.countryName}`}><button className='bg-blue-500 px-4 py-2 rounded-md w-full text-bold text-white'>View More</button></Link>
            </div>
        </div>
    )


};

export default TouristCatagory;