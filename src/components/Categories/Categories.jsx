
export default function Categories(){
      return(
            <div class="container">
            <section class="categories">
                  <div class="categories-column">
                        <div class="categories-column-item active"><a href="#">Automobiles</a></div>
                        <div class="categories-column-item"><a href="#">Clothes and wear</a></div>
                        <div class="categories-column-item"><a href="#">Home interiors</a></div>
                        <div class="categories-column-item"><a href="#">Computer and tech</a></div>
                        <div class="categories-column-item"><a href="#">Tools, equipments</a></div>
                        <div class="categories-column-item"><a href="#">Sports and outdoor</a></div>
                        <div class="categories-column-item"><a href="#">Animal and pets</a></div>
                        <div class="categories-column-item"><a href="#">Machinery tools</a></div>
                        <div class="categories-column-item"><a href="#">More category</a></div>
                  </div>
                  <div class="categories-learn-more">
                        <div class="categories-learn-more-img">
                              <div class="categories-learn-more-wrapper">
                                    <div class="categories-learn-more__subtitle">Latest trending</div>
                                    <div class="categories-learn-more__title">Electronic items</div>  
                                    <button class="categories-learn-more__button">Learn more</button>
                              </div>

                        </div>

                        
                  </div>
                  <div class="right-column-wrapper">
                        <div class="hi-user">

                              <div class="hi-user_avatar_text">
                                    <img class="hi-user-avatar" src="src/icons/avatar.svg" alt=""/>
                                    <div class="hi-user_text">Hi, user <br/>let’s get started</div>
                              </div>
                             <div class="hi-user__buttons">
                              <button class="join-now-button button" >Join now</button>
                              <button class="login-button button" >Log in</button>
                             </div>
                        </div>
                  <div class="categories-label-wrapper">
                        <div class="categories-label orange">
                              <div class="categories-label-text">Get US $10 off with a new supplier</div>
                              
                        </div>
                            
                        <div class="categories-label blue">
                              <div class="categories-label-text">Send quotes with supplier preferences</div>
                        </div>
                  </div>
                  </div>
            </section>
      </div>
      )
}