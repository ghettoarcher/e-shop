export default function MainCard(){
      const mainCards= [{
            image:'src/img/backgtound-home.png',
            name: 'Home and outdoor',
            textBtn: 'Source now',
            },
            {
            image:'src/',
            name: 'Consumer electronics and gadgets',
            textBtn: 'Source now',
            },
      ]
      return(<div className="card">
            {mainCards.map((mainCard,index) =>(
                  <div className="home-card" key={index}>
            <div className="home-img-item"><img src={mainCard.image} alt=""/></div>
            <div className="home-text-item">{mainCard.name}</div>
            <div className="home-btn">{mainCard.textBtn}</div>
                  </div>  
            ))}
            </div>
      );

}