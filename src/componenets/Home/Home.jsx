import {  Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Home = () => {
 const navigation = useNavigation()
    return (
       <div>
            <h2>This is Home Page</h2>
            <Navbar></Navbar>
            {
                navigation.state === "loading"?<p>Loading...</p>:<Outlet/>
            }
            
            <Footer/>
       </div>
    );
};

export default Home;