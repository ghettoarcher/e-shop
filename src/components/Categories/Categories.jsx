
export default function Categories(){
      return(
            <div className="container">
            <section className="categories">
                  <div className="categories-column">
                        <div className="categories-column-item active"><a href="#">Automobiles</a></div>
                        <div className="categories-column-item"><a href="#">Clothes and wear</a></div>
                        <div className="categories-column-item"><a href="#">Home interiors</a></div>
                        <div className="categories-column-item"><a href="#">Computer and tech</a></div>
                        <div className="categories-column-item"><a href="#">Tools, equipments</a></div>
                        <div className="categories-column-item"><a href="#">Sports and outdoor</a></div>
                        <div className="categories-column-item"><a href="#">Animal and pets</a></div>
                        <div className="categories-column-item"><a href="#">Machinery tools</a></div>
                        <div className="categories-column-item"><a href="#">More category</a></div>
                  </div>
                  <div className="categories-learn-more">
                        <div className="categories-learn-more-img">
                              <div className="categories-learn-more-wrapper">
                                    <div className="categories-learn-more__subtitle">Latest trending</div>
                                    <div className="categories-learn-more__title">Electronic items</div>  
                                    <button className="categories-learn-more__button">Learn more</button>
                              </div>

                        </div>

                        
                  </div>
                  <div className="right-column-wrapper">
                        <div className="hi-user">

                              <div className="hi-user_avatar_text">
                                    <img className="hi-user-avatar" src="src/icons/avatar.svg" alt=""/>
                                    <div className="hi-user_text">Hi, user <br/>let’s get started</div>
                              </div>
                             <div className="hi-user__buttons">
                              <button className="join-now-button button" >Join now</button>
                              <button className="login-button button" >Log in</button>
                             </div>
                        </div>
                  <div className="categories-label-wrapper">
                        <div className="categories-label orange">
                              <div className="categories-label-text">Get US $10 off with a new supplier</div>
                              
                        </div>
                            
                        <div className="categories-label blue">
                              <div className="categories-label-text">Send quotes with supplier preferences</div>
                        </div>
                  </div>
                  </div>
            </section>
      </div>
      )
}