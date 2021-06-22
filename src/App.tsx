import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <div className="h-screen">
            <Navbar />
            <HomeScreen />
            <Footer />
        </div>
    );
};

export default App;
