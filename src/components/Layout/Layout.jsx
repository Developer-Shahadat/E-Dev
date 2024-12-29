/* eslint-disable react/prop-types */
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
             <div className="main-contain min-h-screen ">
                {children}
             </div>
             <Footer/>
        </div>
    );
};

export default Layout;