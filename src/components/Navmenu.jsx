import '../css/nav-menu.css'
import '../css/container.css'

export default function(){
      return(
            <div className="nav-menu">
            <div className="nav-menu-left">
                  <a className="nav-menu-burger" ><img className="icon-category" src="/src/icons/menu.svg" alt=""/>All category</a>
                  <a href="#">Hot offers</a>
                  <a href="#">Gift boxes</a>
                  <a href="#">Project</a>
                  <a href="#">Menu item</a>
                  <a className="nav-menu-help">Help<img className="icon-help" src="/src/icons/category-menu.svg" alt=""/></a>
            </div>
            
            <div className="nav-menu-right">
                  <a className="choice-menu-language">English, USD <img className="icons-language" src="/src/icons/category-menu.svg" alt=""/></a>
                  <a className="delivery">Ship to <img className="icons-flags" src="/src/icons/flags/DE@2x.png" alt=""/>
                        <img className="icons-delivery" src="/src/icons/category-menu.svg" alt=""/>
                  </a>      
            </div>
            </div>
      )
      

}