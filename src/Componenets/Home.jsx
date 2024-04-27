import { Helmet } from "react-helmet";
import Header from "./Pages/Header/Header";


const Home = () => {
    return (
        
        <div>
        <Helmet>
          <title>Home || Tourism</title>
        </Helmet>
            <Header></Header>
        </div>
    );
};

export default Home;