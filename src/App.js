import "./App.css";
import Banner from "./views/components/Banner";
import Footer from "./views/components/Footer";
import Header from "./views/components/Header";
import Navbar from "./views/components/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Header />
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
