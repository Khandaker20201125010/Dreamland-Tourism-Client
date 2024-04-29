import { Helmet } from "react-helmet";
import Header from "./Pages/Header/Header";
import ToursumSelectCard from "./toursimCardsection/ToursumSelectCard";
import ClientReview from "./ClientReview/ClientReview";


const Home = () => {
    return (
        
        <div>
        <Helmet>
          <title>Home || Tourism</title>
        </Helmet>
            <Header></Header>
            <div className="container m-auto">
                <ToursumSelectCard></ToursumSelectCard>
            </div>

            <div>

            </div>

            
            <div className="container m-auto">
                <ClientReview></ClientReview>
            </div>
        </div>
    );
};

export default Home;