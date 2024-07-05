import Img1 from '../../public/img3.png';
import Img2 from '../../public/img2.png';
import Img3 from '../../public/img3.png';


const ServicesData = [
  {
    id:1,
    img:Img1,
    name:"Eespresso",
    dscription:"beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plants of African origin. Coffee is one of the three most popular beverages in the world",
    aosDelay:"100",
  },

  {
    id:2,
    img:Img2,
    name:"Rosted",
    dscription:"beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plants of African origin. Coffee is one of the three most popular beverages in the world",
    aosDelay:"200",
  },

  {
    id:3,
    img:Img3,
    name:"Clambero",
    dscription:"beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plants of African origin. Coffee is one of the three most popular beverages in the world",
    aosDelay:"300",
  },
];

const Services = () => {
  return (
    <div className="py-10">
      <div className="container">

        {/* header title */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Best Coffee For You..!
          </h1>
        </div>

        {/* service card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
          {
            ServicesData.map((data, index) => {
              return(
                <div 
                data-aos = "fade-up"
                data-aos-delay = {data.aosDelay}
                key={index}
                className="rounded-2xl bg-white hover:bg-amber-800  hover:text-white shadow-xl duration-200 max-w-[300px] group relative"
                
                >

                {/* image section */}

                  <div className="h-[120px]">
                    <img src={data.img} alt="images from servicesdata" className="max-w-[220px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300" />
                  </div>


                  {/* text section */}
                  <div className="p-4 text-center ">
                    <h1 className="text-xl font-bold">
                      {data.name}
                    </h1>
                    <p className="text-gray-500 group-hover:text-white text-sm line-clamp-2">
                      {data.dscription}
                    </p>
                  </div>

                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Services
