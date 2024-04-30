import { useLoaderData } from "react-router-dom";
import Tourismcard from "../toursmcard/Tourismcard";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import Lottileone from "../Lottieone/Lottileone";
import { Typewriter } from "react-simple-typewriter";


const AlltouristSport = () => {
    const tourism = useLoaderData();

    const [item, setItem] = useState(tourism);
    // useEffect(() => { 
    //     // const tosrt = tourism.sort ((x,y)=>x.averageCost-y.averageCost )
    //     // setSort(tourism);
    //     // setItem(tourism); 
    // }, [tourism])


    const handlelSort = (element) => {
        if (element === 'Ascending') {
            const asc = [...item].sort((x, y) => x.averageCost - y.averageCost);
            setItem(asc);
        } else if (element === 'Descending') {
            const des = [...item].sort((x, y) => y.averageCost - x.averageCost);
            setItem(des);
        }
    };

    return (
        <div className=" ">
            <div className="all ao">
                <h1 className="text-center m-auto text-white text-8xl font-bold w-3/4">
                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['Welcome To Our Dreamland Tourism ']}
                            loop={5}
                            cursor
                            cursorStyle='❤'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}

                        />
                    </span>
                </h1>
            </div>
            <div className="my-5 flex justify-center items-center">
                <details className="dropdown">
                    <summary className="m-1 btn font-bold flex gap-2 justify-center items-center bg-blue-400">Select spot By<FaChevronDown></FaChevronDown></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box  w-32">
                        <li onClick={() => handlelSort('Ascending')} className="font-bold mb-3 text-center btn"> Ascending </li>
                        <li onClick={() => handlelSort('Descending')} className="font-bold mb-3 text-center btn"> Descending </li>
                    </ul>
                </details>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    item?.map(tourism => <Tourismcard key={tourism._id} tourism={tourism}></Tourismcard>)
                }
            </div>

        </div>
    );
};

export default AlltouristSport;