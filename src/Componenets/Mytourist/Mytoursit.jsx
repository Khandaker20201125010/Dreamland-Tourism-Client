
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const Mytoursit = ({ item }) => {
    const handleDelete = _id => {
        // console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/torisum/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your craft has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    const { _id,name, TouristSpotName, countryName, shortDescription, averageCost, Location, seasonality, TotaVisitorsPerYear, email, Image, travelTime } = item
    return (
        // <div data-aos="zoom-in" className='border p-5 flex flex-col shadow-lg rounded-md'>
        //     <div className='flex justify-center items-center'>
        //         <img className='w-72 h-48 rounded-md border mb-5' src={Image} alt="" />
        //     </div>
        //     <div className='flex-grow'>
        //         <h2 className='text-2xl font-bold mb-5'>{itemName}</h2>
        //         <h2 className='text-2xl font-bold  '>Category: <span className='text-2xl font-bold text-red-400'>{subcategoryName}</span></h2>
        //         <div className='my-5 flex justify-between items-center '>
        //             <p className='font-bold'>Price : {price}</p>
        //             <p className='font-bold flex gap-2'>Rating : <span className='text-yellow-700 text-xl'>{rating}</span></p>
        //         </div>
        //         <div className='my-5  '>
        //             <p className='font-bold mb-3'>Processing Time : {processingTime} days</p>
        //             <p className='font-bold flex gap-2'>Customization : <span className='text-red-500'>{}</span></p>
        //             <p className='font-bold mb-3'>Item Type : {itemType}</p>
        //         </div>

        //     </div>

        //     <div className='flex justify-between'>
        //         <Link to={`/torisum/${_id}`}><button className='bg-green-500 px-4 py-2 rounded-md text-bold text-white'>View More</button></Link>

        //         <Link to={`/updatecard/${_id}`}><button className='bg-yellow-500 px-4 py-2 rounded-md text-bold text-white'>Edit</button></Link>

        //         <button onClick={() => handleDelete(_id)} className='bg-red-500 px-4 py-2 rounded-md text-bold text-white'>Delete</button>
        //     </div>



        // </div>







        <div>
         
            
            <div className="overflow-x-auto">
                <table className="table mb-5 border-b-2">

                    <thead>
                        <tr>
                            <th className='text-center font-bold text-lg '>Image, Country name & Location</th>
                            <th className='text-center font-bold text-lg'>Description</th>
                            <th className='text-center font-bold text-lg'>Others</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className=" ">
                                        <div>
                                            <img className='w-64 h-52 rounded-md border' src={Image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className='w-[300px] '>
                                        <p className='text-xl font-bold mb-6'>Location : {Location}</p>
                                        <p className='text-xl font-bold'>country Name: {countryName}</p>
                                    </div>
                                </div>
                            </td>
                            <td className='w-[300px]'>
                                <p><span className='font-bold'>Description :</span> {shortDescription}</p>
                            </td>
                            <td>
                                <p><span className='font-bold'>Price :</span> {averageCost}</p>
                                <p><span className='font-bold'>Travel Time :</span> {travelTime} days</p>

                            </td>
                            <th>
                                <div className='mb-5'>
                                <Link to={`/updatecard/${_id}`}><button className='bg-yellow-500 px-4 py-2 rounded-md text-bold text-white'>Edit</button></Link>
                                </div>

                                <div className='mb-5'>
                                <button onClick={() => handleDelete(_id)} className='bg-red-500 px-4 py-2 rounded-md text-bold text-white'>Delete</button>
                                </div>
                                <div className='mb-5'>
                                <Link to={`/torisum/${_id}`}><button className='bg-green-500 px-4 py-2 rounded-md text-bold text-white'>View More</button></Link>
                                </div>
                            </th>
                        </tr>
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Mytoursit;