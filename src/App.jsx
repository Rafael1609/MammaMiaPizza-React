import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      {/*<Home />
      <Register />
      <Login />*/}
      <Cart />
      <Footer />
    </>
  );
};

export default App;
