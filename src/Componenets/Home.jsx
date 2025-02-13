import { Helmet } from "react-helmet";
import Header from "./Pages/Header/Header";
import ToursumSelectCard from "./toursimCardsection/ToursumSelectCard";
import ClientReview from "./ClientReview/ClientReview";
import MoreSpot from "./MoreSpot/MoreSpot";
import AllTourist from "./alltourist/AllTourist";


const Home = () => {
    return (
        
        <div className="fonty">
        <Helmet>
          <title>Home || Tourism</title>
        </Helmet>
            <Header></Header>
            <div className="container m-auto">
                <ToursumSelectCard></ToursumSelectCard>
            </div>

            <div>
                   <AllTourist></AllTourist>
            </div>
                  
            
            <div className="container m-auto fonty">
                <ClientReview></ClientReview>
            </div>
            <div className="fonty">
                <MoreSpot></MoreSpot>
            </div>
        </div>
    );
};

export default Home;