import { useEffect, useState } from "react";


const CountryBangladesh = () => {
    const [allDAta, setAllData] = useState([])
    const [allDataPro, setAllDataPro] = useState([])

    useEffect(() => {
        fetch('https://tourism-management-server-cyan-ten.vercel.app/torisum')
            .then(res => res.json())
            .then(data => {

                setAllDataPro(data)
            })
    }, [])
 


    useEffect(()=>{
        const landscapePainting = allDataPro.filter(item => item.countryName.toLowerCase() === 'bangladesh');
            setAllData(landscapePainting);
    },[allDataPro])

    return (
        <div>
                <h2 className="text-2xl font-bold text-center my-5">All Charcoal Sketching Items</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 px-5">
                {/* {
                    allDAta?.map(item =><Charcoal key={item._id} item={item}></Charcoal>  )
                } */}
            </div>


        </div>
    );
};

export default CountryBangladesh;