
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './layout/Header.jsx';
import {Route,Switch} from "react-router-dom"
import Footer from './layout/Footer.jsx';
import PageContent from './layout/PageContent.jsx';
import ProductCard from './components/ProductCard.jsx';
import dress1 from './images/dress2.jpg'
import dress3 from './assets/dress1.jpg'
import dress4 from './images/dress4.jpg'
import dress5 from './images/dress5.jpg'
import clt from './images/clt1.jpg'
import clt2 from './images/clt2.jpg'
import clt3 from './images/clt3.jpg'
 function App() {
  

  return (
    <>
      <Header/>

      <Switch>
        
          <Route path="/">
            <PageContent/>
            <div className="p-4 mb-16 flex flex-wrap justify-center gap-6">
            <ProductCard pic={clt2}title="clt2"/>
            <ProductCard pic={dress3} title="dress1"/>
            <ProductCard pic={dress4}title="dress4"/> 
            <ProductCard pic={dress5}title="dress5"/>
            <ProductCard pic={clt3}title="clt3"/>
            </div>
            
           <Footer/>
          </Route>
       
          
          
        </Switch>
      
      <ToastContainer />
    </>
  )
}

export default App
