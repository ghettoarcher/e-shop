import './Deals_and_offers_item'
import Deals_and_offers_item from './Deals_and_offers_item'


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
                  <Deals_and_offers_item></Deals_and_offers_item>

            </div>

      </section>
</div>
      )
}