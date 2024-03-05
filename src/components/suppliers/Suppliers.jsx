
export default function Suppliers(){
      const regions = [
            {
                  name: "Arabic Emirates",
                  website: 'shopname.ae',
                  icon: '/src/icons/flags/AE@2x.png',
            },
            {
                  name: "Denmark",
                  website: 'denmark.com.dk',
                  icon: '/src/icons/flags/DK@2x.png',
            },
            {
                  name: "Australia",
                  website: 'shopname.ae',
                  icon: '/src/icons/flags/AU@2x.png',
            },
            {
                  name: "France",
                  website: 'shopname.ae',
                  icon: '/src/icons/flags/FR@2x.png',
            },
            {
                  name: "United States",
                  website: 'shopname.ae',
                  icon: '/src/icons/flags/US@2x.png',
            },
            {
                  name: "Russia",
                  website: 'shopname.ae',
                  icon: '/src/icons/flags/RU@2x.png',
            },
            {
                  name: "China",
                  website: 'shopname.ae',
                  icon: '/src/icons/flags/CN@2x.png',
            },
            {
                  name: "Italy",
                  website: 'shopname.ae',
                  icon: '/src/icons/flags/IT@2x.png',
            },
            {
                  name: "Great Britain",
                  website: 'shopname.ae',
                  icon: '/src/icons/flags/GB@2x.png',
            },
            {
                  name: "Arabic Emirates",
                  website: 'shopname.ae',
                  icon: '/src/icons/flags/AE@2x.png',
            },

      ];
      return(
      <section className="suppliers">
            <div className="suppliers-title title">Suppliers by region</div>
            <div className="suppliers-wrapper">
            {regions.map((region,index) =>(
                  <div className="suppliers-item" key={index}>
                        <div className="suppliers-flag"><img src={region.icon} alt=""/></div>
                        <div className="suppliers-descr">
                              <div className="suppliers-country">{region.name}</div>
                              <div className="suppliers-website">{region.website}</div>
                        </div>
                  </div>
            ))}        
            </div>
      </section>

      )

}