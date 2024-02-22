
export default function(image,name,discount){
      return(
            <div className="deals_and_offers_item">
                        <img class="item-img " src={image} alt=""/>
                        <div class="item-name">{name}</div>
                        <div class="item-discount">{discount}</div>  
                  </div>
      )
}