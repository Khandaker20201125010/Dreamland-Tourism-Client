import Lottie from "lottie-react";
import li from '../../assets/LandLandscape.json'


const Lottileone = () => {
    const style ={
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
            height:"50%",
            display: "flex"
           
      
    }
    return (
        <div>
            <Lottie style={style} animationData={li} />
            
        </div>
    );
};

export default Lottileone;