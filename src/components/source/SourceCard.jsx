export default function SourceCard({products}){

      return(
            <div className="cards-row">
            {products.map((product,index) => (
                  <div className="card-item"key={index} >
            <div className="card-name-item">{product.name}</div>
            <div className="card-price-item">From <br/>USD {product.price}</div>
            <div className="card-image-item"><img className="home-image" src={product.image} alt=""/></div>
                  </div>

            ))}
            </div>
      );
}