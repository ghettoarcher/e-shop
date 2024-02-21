import '../css/header.css'
import '../css/container.css'



export default function Header(){
      return(
            <div className="header-wrapper">
        <div className="container">
        <header>
              <div className="header-logo">
                    <img src="src/icons/Brand/logo-colored.svg" alt="brand"/>
              </div>
    
              <div className="header-search">      
                    <input className="header-search-field" placeholder="Search"/>          
                          <select  className="header-search-category" name="" id="">
                                <option className="header-search-category-option" value="All category">All category</option>
                          </select>
    
                          <button type="button" className="header-search-button">Search</button>
              </div>
    
              <div className="header-right-links">
                    <div className="header-right-links-wrapper first">
                          <div className="header-right-links-icon"><img src="src/icons/profile-icon.svg" alt=""/></div>
                          <div className="header-right-link-text">Profile</div>
                    </div>
                    <div className="header-right-links-wrapper">
                          <div className="header-right-links-icon"><img src="src/icons/message-icon.svg" alt=""/></div>
                          <div className="header-right-link-text">Message</div>
                    </div>
                    <div className="header-right-links-wrapper">
                          <div className="header-right-links-icon"><img src="src/icons/favourite.svg" alt=""/></div>
                          <div className="header-right-link-text">Orders</div>
                    </div>
                    <div className="header-right-links-wrapper">
                          <div className="header-right-links-icon"><img src="src/icons/shopping-icon.svg" alt=""/></div>
                          <div className="header-right-link-text">My cart</div>
                    </div>
    
              </div>               
    
        </header>
        
    </div>
    </div>
      )
    }