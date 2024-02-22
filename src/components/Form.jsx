import '../css/form.css'
import '../css/container.css'
export default function Form(){
      
      <div className="container">
      <section className="form-section">
         
      
            <div className="form-description">
                  
                  <div className="form-h1">An easy way to send requests to all suppliers</div>
                  <div className="form-h6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</div>
            </div>
                  
            <form className="form-box">
                  <div className="form-article">Send quote to suppliers</div>
                  <div className="input-box">
                        <input type="text" className="item-1" placeholder="What item you need?"/>
                        <input type="text" className="item-2"  placeholder="Type more details"/>
                        <input type="text" className="item-3" placeholder="Quantity"/>
                        <select type="text" className="item-4"  >
                              <option value="Pcs" className="item-4" >Pcs</option>
                        </select>
                  </div>
                  <button type="button" className="form-btn">Send inquiry</button>
            </form>
      </section>

                       
</div>
}