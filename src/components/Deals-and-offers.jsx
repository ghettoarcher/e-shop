import '../css/deals_and_offers.css'
import '../css/container.css'
export default function(){
      return(
            <div class="container">
      <section class="deals_and_offers">
            <div class="deals_and_offers__timer">
                  <div class="title">Deals and offers</div>
                  <div class="subtitle">Hygiene equipments</div>
                  <div class="timer-wrapper">
                        <div class="timer-item">
                              <div class="timer-number">04</div>
                              <div class="timer-text">Days</div>
                        </div>
                        <div class="timer-item">
                              <div class="timer-number">13</div>
                              <div class="timer-text">Hour</div>
                        </div>
                        <div class="timer-item">
                              <div class="timer-number">34</div>
                              <div class="timer-text">Min</div>
                        </div>
                        <div class="timer-item">
                              <div class="timer-number">56</div>
                              <div class="timer-text">Sec</div>
                        </div>
                  </div>
            </div>
            <div class="deals_and_offers_item__wrapper">
                  <div class="deals_and_offers_item">
                        <img class="item-img " src="src/img/tech/image 35.png" alt=""/>
                        <div class="item-name">Smart watches</div>
                        <div class="item-discount">-25%</div>  
                  </div>
                  <div class="deals_and_offers_item">
                        <img class="item-img" src="src/img/tech/image 34.png" alt=""/>
                        <div class="item-name">Laptops</div>
                        <div class="item-discount">-15%</div>  
                  </div>
                  <div class="deals_and_offers_item">
                        <img class="item-img" src="src/img/tech/image 28.png" alt=""/>
                        <div class="item-name">GoPro cameras</div>
                        <div class="item-discount">-40%</div>  
                  </div>
                  <div class="deals_and_offers_item">
                        <img class="item-img" src="src/img/tech/image 29.png" alt=""/>
                        <div class="item-name">Headphones</div>
                        <div class="item-discount">-25%</div>  
                  </div>
                  <div class="deals_and_offers_item">
                        <img class="item-img" src="src/img/tech/image 23.png" alt=""/>
                        <div class="item-name">Smartphones</div>
                        <div class="item-discount">-25%</div>  
                  </div>
            </div>

      </section>
</div>
      )
}