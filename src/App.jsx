import Header from './components/Header/Header'
import Navmenu from './components/Navmenu'
import Categories from './components/Categories/Categories'
import Deals from './components/Deals/Deals'
import Gadgets from './components/source/Source'
import Form from './components/Form'
import Recommended from './components/recommended/Recommended'
import Extra from './components/extra/Extra'
import Suppliers from './components/suppliers/Suppliers'
import Subscribe from './components/subscribe/Subscribe'
import Footer from './components/Footer'


export default function App() {

  return (  <>
          <div className="container">    
        <Header/>
        </div> 
        <Navmenu/>
        <div className="container">  
          <Categories/>
          <Deals/>
          <Gadgets/>
          <Form/>
          <Recommended/>
          <Extra/>
          <Suppliers/>
          </div> 
        <Subscribe/>
        <Footer/>

                </>
  )
}

