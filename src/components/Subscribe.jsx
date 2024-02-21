import '../css/subscribe.css'
import '../css/container.css'

export default function Subscribe(){
      return(
            <section class="subscribe">
            <div class="subscribe-wrapper">
            <div class="subscribe-title">Subscribe on our newsletter</div>
            <div class="subscribe-subtitle">Get daily news on upcoming offers from many suppliers all over the world</div>
            <div class="subscribe-email">
                  <div class="subscribe-field-wrapper">
                        <img className='subscribe-img' src="src/icons/email.svg" alt=""/>
                        <input class="subscribe-field" type="text" placeholder="Email"/>
                  </div>
                  
                  <button class="subscribe-button">Subscribe</button>
            </div>
      </div>
</section>
      )
}