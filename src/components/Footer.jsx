import '../css/footer.css'
import '../css/container.css'

export default function Footer(){
      return(
            <>
      <footer className="footer">
            <div className="left-wrapper-footer">
                  <img className="footer-logo" src="src/icons/Brand/logo-colored.svg" alt=""/>
                  <div className="footer-description">Best information about the company gies here but now lorem ipsum is</div>
                  <div className="footer-icon">
                        <img src="src/icons/social/facebook3.svg" alt=""/>
                        <img src="src/icons/social/twitter3.svg" alt=""/>
                        <img src="src/icons/social/linkedin3.svg" alt=""/>
                        <img src="src/icons/social/instagram3.svg" alt=""/>
                        <img src="src/icons/social/youtube3.svg"  alt=""/>
                        
                  </div>
            </div>
            <div className="main-information-footer">
                  <div className="Information-footer">
                        <a href="#" className="title-about">About</a>
                        <a href="#" className="footer-item">About us</a>
                        <a href="#" className="footer-item">Find store</a>
                        <a href="#" className="footer-item">Categories</a>
                        <a href="#" className="footer-item">Blogs</a>
                  </div>

                  <div className="Information-footer">
                        <a href="#" className="title-about">Partnership</a>
                        <a href="#" className="footer-item">About us</a>
                        <a href="#" className="footer-item">Find store</a>
                        <a href="#" className="footer-item">Categories</a>
                        <a href="#" className="footer-item">Blogs</a>
                  </div>

                  <div className="Information-footer">
                        <a href="#" className="title-about">Information</a>
                        <a href="#" className="footer-item">About us</a>
                        <a href="#" className="footer-item">Find store</a>
                        <a href="#" className="footer-item">Categories</a>
                        <a href="#" className="footer-item">Blogs</a>
                  </div>

                  <div className="Information-footer">
                        <a href="#" className="title-about">For users</a>
                        <a href="#" className="footer-item">About us</a>
                        <a href="#" className="footer-item">Find store</a>
                        <a href="#" className="footer-item">Categories</a>
                        <a href="#" className="footer-item">Blogs</a>
                  </div>
                  <div className="Information-footer">
                        <a href="#" className="title-about">Get app</a>
                        <a href="#" className="icon-appstore"><img src="../icons/flags/AU@2x.png" alt=""/></a>
                        <a href="#" className="icon-appstore"><img src="src/icons/social/market-button-1.png" alt=""/></a>
                  </div>
            </div>
            
      </footer>
      <div className="copyright-footer-wrapper">
      <div className="copyright-footer">
      <div className="title-copyright-footer">© 2023 Ecommerce. </div>
      <div className="switch-country"><img className="english-flag" src="/src/icons/flags/US@2x.png"alt=""/>English.
            <img className="expand" src="src/icons/expand_less.svg" alt=""/>
      </div>
      
      </div>
      </div>
      </>
      

      )
}