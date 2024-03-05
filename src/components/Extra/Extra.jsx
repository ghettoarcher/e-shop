
export default function Extra(){
      const extraList = [
            {
                  title: 'Source from Industry Hubs',
                  background:'src/img/extra/image 108.png',

            },
            {
                  title: 'Customize Your Products',
                  background:'src/img/extra/image 104.png',

            },
            {
                  title: 'Fast, reliable shipping by ocean or air',
                  background:'src/img/extra/image 106.png',

            },
            {
                  title: 'Product monitoring and inspection',
                  background:'src/img/extra/image 107.png',

            },
      ];
      return(
      <section className="extra">
            <div className="extra-title title">Our extra services</div>
            <div className="extra-items-wrapper">
            {extraList.map((item,index) =>(
                  <div className="extra-item" key={index}>
                        <img  className="extra-background" src={item.background} alt={item.name}/>
                        <div className="bg-icon"></div>  
                        <img className="search-img" src="src/img/extra/search.svg"/>
                        <div className="extra-descr-wrapper">
                              <div className="extra-descr">{item.title}</div>
                        </div>
                  </div>
            ))}

            </div>
      </section>

      )
}