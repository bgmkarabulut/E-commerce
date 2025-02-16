import { Switch,Route } from "react-router-dom/cjs/react-router-dom.min";

import React from 'react'
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ShopPage from "../pages/ShopPage";
const PageContent = () => {
  return (
    <main className="flex flex-col items-center w-full min-h-screen px-3 md:px-5 lg:px-6">


    <Switch>
        <Route exact path="/"component={HomePage}/>
        <Route exact path="/shop" component={ShopPage } />
        <Route exact path="/about" component={AboutPage } />
        <Route exact path="/contact" component={ContactPage } />
    </Switch>

    </main>
  )
}

export default PageContent
