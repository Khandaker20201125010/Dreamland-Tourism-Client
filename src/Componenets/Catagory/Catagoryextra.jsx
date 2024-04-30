import { useLoaderData, useParams } from "react-router-dom";
import CatagroyPartTwo from "../CatagoryPartTwo/CatagroyPartTwo";

const Catagoryextra = () => {
     const lod = useLoaderData()
     const {countryName} = useParams();
     const filerCountry = lod.filter(item => item.countryName === countryName)
     
    return (

        <div className=' grid md:grid-cols-2 gap-5 mt-10 md:mt-10 lg:grid-cols-3'>
            {
                filerCountry.map(tour => <CatagroyPartTwo key={tour._id} tour={tour}></CatagroyPartTwo>)
            }
            

        </div>

    );
};

export default Catagoryextra;