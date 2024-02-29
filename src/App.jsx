import Header from './components/Header/Header'
import Navmenu from './components/Navmenu'
import Categories from './components/Categories/Categories'
import Deals from './components/Deals/Deals'
import Gadgets from './components/source/Source'
import Form from './components/Form'
import Recommended from './components/Recommended'
import Extra from './components/Extra'
import Suppliers from './components/Suppliers'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import Copyrightfooter from './components/Copyright-footer'



export default function App() {

  return (  
      <div>              
        <Header/>
        <Navmenu/>
        <Categories/>
        <Deals/>
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

