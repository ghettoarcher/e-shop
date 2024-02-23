import Header from './components/Header/Header'
import Navmenu from './components/Navmenu'
import Categories from './components/Categories/Categories'
import DealsAndOffers from './components/deals-and-offers/Deals-and-offers'
import Gadgets from './components/Gadgets'
import Form from './components/Form'
import Recommended from './components/Recommended'
import Extra from './components/Extra'
import Suppliers from './components/Suppliers'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import Copyrightfooter from './components/Copyright-footer'
import Deals_and_offers_item from './components/deals-and-offers/Deals_and_offers_item'



export default function App() {

  return (  
      <div>              
        <Header/>
        <Navmenu/>
        <Categories/>
        <DealsAndOffers>
          <Deals_and_offers_item>
              
            </Deals_and_offers_item>  
        </DealsAndOffers>
        <Gadgets/>
        <Form/>
        <Recommended/>
        <Extra/>
        <Suppliers/>
        <Subscribe/>
        <Footer/>
        <Copyrightfooter/>
      </div>
  )
}

