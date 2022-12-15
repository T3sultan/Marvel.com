import "./App.css";
import Banner from "./views/components/Banner";
import Footer from "./views/components/Footer";
import Header from "./views/components/Header";
import Navbar from "./views/components/Navbar/Navbar";
import Home from "./views/pages/home/Home";

function App() {
  return (
    <div className="">
      <Header />
      <Navbar />
      <Banner />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
