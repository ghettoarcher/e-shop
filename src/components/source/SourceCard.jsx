export default function SourceCard({products}){

      return(
            <div className="cards-row">
            {products && products.map((product,index) => (
                  <div className="card-item"key={index} >
            <div className="card-name-item">{product.name}</div>
            <div className="card-price-item">From <br/>USD {product.price}</div>
            <img src={product.image} className="card-image-item" alt=""/>
                  </div>

            ))}
            </div>
      );
}