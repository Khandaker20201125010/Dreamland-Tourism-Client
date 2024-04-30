import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";

const AddToursitSport = () => {
    const { user } = useContext(AuthContext);
    const handelAddSpot = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const TouristSpotName = form.TouristSpotName.value;
        const countryName = form.countryName.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const Location = form.Location.value;
        const seasonality = form.seasonality.value;
        const TotaVisitorsPerYear = form.TotaVisitorsPerYear.value;
        const email = user.email;
        const Image = form.photo.value;
        const travelTime = form.processingTime.value;
        const newTourst = { name, TouristSpotName, countryName, shortDescription, averageCost, Location, seasonality, TotaVisitorsPerYear, email, Image, travelTime}
        fetch('https://tourism-management-server-cyan-ten.vercel.app/torisum',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTourst)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            }
        })
    }
    return (
        <div className="baka">
            <Helmet>
               ^^AddToursitSport^^
            </Helmet>
            <div className="p-5">
                <div className="md:w-2/3 w-4/5 mx-auto shadow-lg bg-blue-200 text-black mt-5 md:mt-10 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-center">Add Tourist Spot</h3>
                    <form onSubmit={handelAddSpot}>
                        <div className="grid md:grid-cols-2 gap-5 mt-5">


                            <div>
                                <p className="text-start">Tourists spot name</p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="Tourists spot name" name="TouristSpotName" id="" />
                            </div>

                            <div>
                                <p className="text-start">Country Name </p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="country Name" name="countryName" id="" />
                            </div>

                            <div>
                                <p className="text-start">Short Description </p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="Short Description" name="shortDescription" id="" />
                            </div>

                            <div>
                                <p className="text-start">Average cost </p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="Average cost" name="averageCost" id="" />
                            </div>

                            <div>
                                <p className="text-start">Location</p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="Location" name="Location" id="" />
                            </div>
                            <div>
                                <p className="text-start">Seasonality </p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="seasonality" name="seasonality" id="" />
                            </div>
                            <div>
                                <p className="text-start"> Traveling time </p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="Processing Time" name="processingTime" id="" />
                            </div>
                            <div>
                                <p className="text-start">TotaVisitorsPerYear </p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="TotaVisitorsPerYear" name="TotaVisitorsPerYear" id="" />
                            </div>
                            <div>
                                <p className="text-start">User Email </p>
                                <input className="w-full border-2 px-4 py-2" type="email" placeholder="Email" defaultValue={user.email} name="email" id="" />
                            </div>
                            <div>
                                <p className="text-start">User Name </p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="User Name" name="name" id="" />
                            </div>

                        </div>

                        <div>
                            <p className="text-start">Image </p>
                            <input className="w-full border-2 px-4 py-2" type="text" placeholder="Image URL" name="photo" id="" />
                        </div>


                        <input className="w-full py-2 mb-6 font-bold hover:bg-blue-400 text-white bg-blue-500 mt-5" type="submit" value="Add Tourist Spot" />

                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddToursitSport;