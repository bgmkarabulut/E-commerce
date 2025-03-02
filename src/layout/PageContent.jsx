import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import React from "react";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ShopPage from "../pages/ShopPage";
import TeamPage from "../pages/TeamPage";
import ProductDetailPage from "../components/ProductDetailPage";
import SignupForm from "@/pages/SignupForm";

const PageContent = () => {
  return (
    <main className="flex flex-col items-center w-full min-h-screen px-3 md:px-5 lg:px-6">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/product/:id" component={ProductDetailPage} />
        <Route exact path="/signup" component={SignupForm} />
      </Switch>
    </main>
  );
};

export default PageContent;
