export default function MainCard({image,name,textBtn}){
      
      return(
      <>
                  <div className="source-card">
            <div className="home-img-item"><img src={image} alt={name}/></div>
            <div className="home-text-item">{name}</div>
            <div className="home-btn">{textBtn}</div>
                  </div>  
            </>
      );

}