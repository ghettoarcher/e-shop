import recommendedItems from "./recommendedItems";

export default function Recommended(){
      return(

      <section className="recommended">
      <div className="recommended-title title">Recommended items</div>
      
            <div className="recommended-wrapper">
            {recommendedItems.map((item,index) =>(
            <div className="recommended-item" key={index}>
            <img src={item.image} className="recommended-img" alt=""/>
            <div className="descr-wrapper">                        
                  <div className="recommended-price">{item.price}</div>
                  <div className="recommended-descr">{item.description}</div>
            </div>
      
      </div>
            ))}
            </div>
            
      </section>

);
};