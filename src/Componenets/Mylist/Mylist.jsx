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
            <div className="">
                {
                    items.map(item => <Mytoursit key={item._id}
                        item={item}></Mytoursit>)
                }
            </div>
        </div>
    );
};

export default Mylist;
