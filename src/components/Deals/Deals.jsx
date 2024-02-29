import Timer from '../timer/Timer';
import products from './products';

const Deals = () => {
  return (
    <div className="container">
      <section className="Deals">

      <Timer/>
        
        <div className="Deals_item__wrapper">
        {products.map((product, index) => (
            <div className="deals_card" key={index}>
              <img className="card-img" src={product.image} alt={product.name} />
              <div className="card-body">
                <span className="card-name">{product.name}</span>
                <span className="card-discount">{product.discount}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Deals;