import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./layout/Header.jsx";
import { Route, Switch } from "react-router-dom";
import Footer from "./layout/Footer.jsx";
import PageContent from "./layout/PageContent.jsx";
import ProductCard from "./components/ProductCard.jsx";
import dress3 from "./assets/dress1.jpg";
import dress4 from "./images/dress4.jpg";
import dress5 from "./images/dress5.jpg";
import clt2 from "./images/clt2.jpg";
import clt3 from "./images/clt3.jpg";
import ProductSlider from "./components/ProductSlider.jsx";
import ShopPage from "./pages/ShopPage.jsx";
function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <PageContent />
          <h1 className="mb-4 text-5xl text-center font-extrabold leading-none tracking-tight text-gray-800 md:text-4xl lg:text-3xl dark:text-white">
            Senin için önerilenler
          </h1>
          <div className="p-4 mb-16 flex flex-wrap justify-center gap-6">
            <ProductSlider />
          </div>
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
      </Switch>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
