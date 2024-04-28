import { useLoaderData } from "react-router-dom";
import Tourismcard from "../toursmcard/Tourismcard";


const AlltouristSport = () => {
    const tourism = useLoaderData();
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {
                tourism.map(tourism => <Tourismcard key={tourism._id} tourism={tourism}></Tourismcard>)
            }
            
        </div>
    );
};

export default AlltouristSport;