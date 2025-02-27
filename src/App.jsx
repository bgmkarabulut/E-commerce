import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./layout/Header.jsx";
import { Route, Switch } from "react-router-dom";
import Footer from "./layout/Footer.jsx";
import PageContent from "./layout/PageContent.jsx";
import ProductSlider from "./components/ProductSlider.jsx";
import ProductDetailPage from "./components/ProductDetailPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
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
        <Route path="/product/:id">
          <ProductDetailPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
