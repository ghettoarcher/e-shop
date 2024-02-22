import '../css/subscribe.css'
import '../css/container.css'

export default function Subscribe(){
      return(
            <section className="subscribe">
            <div className="subscribe-wrapper">
            <div className="subscribe-title">Subscribe on our newsletter</div>
            <div className="subscribe-subtitle">Get daily news on upcoming offers from many suppliers all over the world</div>
            <div className="subscribe-email">
                  <div className="subscribe-field-wrapper">
                        <img className='subscribe-img' src="src/icons/email.svg" alt=""/>
                        <input className="subscribe-field" type="text" placeholder="Email"/>
                  </div>
                  
                  <button className="subscribe-button">Subscribe</button>
            </div>
      </div>
</section>
      )
}