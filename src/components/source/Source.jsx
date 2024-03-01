import MainCard from "./MainCard"
import SourceCard from "./SourceCard"

export default function Source(){
      const home = [
            {
            name: 'Soft chairs',
            price: 20,
            image: '/src/img/interior/1.png'
            },
            {
            name: 'Soft chairs',
            price: 19,
            image: '/src/img/interior/2.png'
            },
            {
            name: 'Kitchen dishes',
            price: 19,
            image: '/src/img/interior/3.png'
            },
            {
            name: 'Kitchen mixer',
            price: 100,
            image: '/src/img/interior/4.png'
            },     
          ];
      const electronic = [
            {
            name: 'Blenders',
            price: 39,
            image: '/src/img/tech/image 35.png'
            },
            {name: 'Home appliance',
            price: 19,
            image: '/src/img/tech/image 35.png'
            },
            {name: 'Coffee maker',
            price: 10,
            image: '/src/img/tech/image 35.png'
            },
            {name: 'Coffee maker',
            price: 10,
            image: '/src/img/tech/image 35.png'
            },
      ];
      return(
      <div className="container">
            <section className="gadgets">  
                        
            <MainCard
                         image = 'src/img/backgtound-home.png'
                         name = 'Home and outdoor'
                         textBtn = 'Source now'/>

            <div className="main-card-item">
                        <SourceCard products={home}/>
                        <SourceCard products={electronic}/>    
            </div>
            <MainCard
                         image = 'src/img/backgtound-home.png'
                         name = 'Consumer electronics and gadgets'
                         textBtn = 'Source now'/>
            <div className="main-card-item">
                        <SourceCard products={home}/>
                        <SourceCard products={electronic}/>    
            </div>
            </section>
      </div>
      )
}
