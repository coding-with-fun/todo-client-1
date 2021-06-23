import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WrappedRouter from "./utils/WrappedRouter";

const App = () => {
    return (
        <div className="h-screen">
            <Router>
                <Navbar />
                <WrappedRouter />
                <Footer />
            </Router>
        </div>
    );
};

export default App;
