import './Deals_and_offers_item'
import Deals_and_offers_item from './Deals_and_offers_item'


export default function(){
<<<<<<< HEAD
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
      return(
            <div className="container">
      <section className="deals_and_offers">
            <div className="deals_and_offers__timer">
                  <div className="title">Deals and offers</div>
                  <div className="subtitle">Hygiene equipments</div>
                  <div className="timer-wrapper">
                        <div className="timer-item">
                              <div className="timer-number">04</div>
                              <div className="timer-text">Days</div>
                        </div>
                        <div className="timer-item">
                              <div className="timer-number">13</div>
                              <div className="timer-text">Hour</div>
                        </div>
                        <div className="timer-item">
                              <div className="timer-number">34</div>
                              <div className="timer-text">Min</div>
                        </div>
                        <div className="timer-item">
                              <div className="timer-number">56</div>
                              <div className="timer-text">Sec</div>
                        </div>
                  </div>
            </div>
            <div className="deals_and_offers_item__wrapper">

            
=======
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
>>>>>>> 1aa21930d9d4a5b1229eab4401ff1baa7777aaf9

            </div>

      </section>
</div>
      )
}