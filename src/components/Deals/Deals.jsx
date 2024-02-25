                                                                                                           
const Deals = () => {
  const products = [
    {
      name: 'Smart watches',
      discount: '-25%',
      image: '/src/img/tech/image 35.png'
    },
    {
      name: 'Laptops',
      discount: '-15%',
      image: '/src/img/tech/image 34.png'
    },
    {
      name: 'GoPro cameras',
      discount: '-40%',
      image: '/src/img/tech/image 28.png'
    },
    {
      name: 'Headphones',
      discount: '-25%',
      image: '/src/img/tech/image 29.png'
    },
    {
      name: 'Canon cameras',
      discount: '-25%',
      image: '/src/img/tech/image 23.png'
    }
  ];

  return (
    <div className="container">
      <section className="Deals">
        <div className="Deals__timer">
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