import { Helmet } from "react-helmet";
import Header from "./Pages/Header/Header";
import ToursumSelectCard from "./toursimCardsection/ToursumSelectCard";


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
        </div>
    );
};

export default Home;