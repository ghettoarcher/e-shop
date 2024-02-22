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
  const items = [
    {
      name:'Smart watches',
      discount: '-25%',
      image: './img/tech/image 35.png'  
    },
    {
      name:'Laptops',
      discount: '-15%',
      image: './img/tech/image 34.png'  
    },
    {
      name:'GoPro cameras',
      discount: '-40%',
      image: './img/tech/image 28.png'  
    },
    {
      name:'Headphones',
      discount: '-25%',
      image: './img/tech/image 29.png'  
    },
    {
      name:'Canon cameras',
      discount: '-25%',
      image: './img/tech/image 23.png'  
    }
  ];

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

