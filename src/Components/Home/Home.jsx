import { Helmet } from "react-helmet-async";
import CategoryCard from "../CategoryCard/CategoryCard";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Donation Campaign</title>
            </Helmet>
            <div>
                <CategoryCard></CategoryCard>
            </div>
        </>

    );
};


export default Home;