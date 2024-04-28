import { useContext, useEffect, useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import Mytoursit from "../Mytourist/Mytoursit";
import { AuthContext } from "../Providers/Authprovider";

const Mylist = () => {
    const { user } = useContext(AuthContext)
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/torisum/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [user])
    return (
        <div>
            <div className="my-5 flex justify-center items-center">
                <details className="dropdown">
                    <summary className="m-1 btn font-bold flex gap-2 justify-center items-center">Customization <FaChevronDown></FaChevronDown></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box  w-32">
                        <li className="font-bold mb-3 text-center"> Yes </li>
                        <li className="font-bold mb-3 text-center"> No </li>
                    </ul>
                </details>
            </div>

            <div className="min-h-screen mt-5 md:mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 md:px-5">
                {
                    items.map(item => <Mytoursit key={item._id}
                        item={item}></Mytoursit>)
                }
            </div>
        </div>
    );
};

export default Mylist;
