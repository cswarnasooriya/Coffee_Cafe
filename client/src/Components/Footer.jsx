import FooterBg from '../../public/FooterBg.png';
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const FooterLinks = [
    {
        title:"Home",
        link:"/#",
    },

    {
        title:"About",
        link:"/about",
    },

    {
        title:"Contact",
        link:"/contact",
    },

    {
        title:"Blog",
        link:"/blog",
    },
];

const QuickLinks = [
    {
        title:"FAQ",
        link:"/faq",
    },

    {
        title:"Location",
        link:"/location",
    },

    {
        title:"Service Centert",
        link:"/servicet",
    },

    {
        title:"Support",
        link:"/support",
    },
];

const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width:"100%",
    minHeight:"400px",

};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">   
        <div className="bg-black/60 min-h-[400px]">
            <div className="container grid md:grid-cols-3 pb-20 pt-5 bg-white/10">

                {/* company deatils */}
                <div data-aos="fade-right" data-aos-delay="100" className="py-8 px-4">
                    <a data-aos="zoom-in" data-aos-delay="600" href="#" className="text-2xl font-semibold sm:text-3xl font-cursive tracking-widest">
                        {" "}
                        Coffee Cafe
                    </a>

                    <p className="pt-4">
                        {" "}
                        Crafted Coffee, Cozy Vibes, Unforgetable Moments - Your Perfect esprssion Share With Us Today..!
                    </p>

                    <a href="/#" className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full hover:scale-110 duration-200">
                        Visit Our Online Store Now
                    </a>

                </div>

                {/* footer links */}
                <div data-aos="fade-left" data-aos-delay="400" className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">

                    {/* first col */}
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-semibold sm:text-left mb-3">
                            Get Touch With Us
                        </h1>

                        <ul className="space-y-3">
                            {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className="inline-block hover:scale-105 duration-200">
                                            {data.title}
                                        </a>
                                    </li>
                                ))
                            }
                            
                        </ul>

                    </div>

                    {/*second col */}
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-semibold sm:text-left mb-3">
                            Easy Contact Us
                        </h1>

                        <ul className="space-y-3">
                            {QuickLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className="inline-block hover:scale-105 duration-200">
                                            {data.title}
                                        </a>
                                    </li>
                                ))
                            }
                            
                        </ul>

                    </div>

                    {/* company adress section */}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h1 className="text-xl font-semibold sm:text-left mb-3" >
                            Location Details
                        </h1>
                        <div>
                            <p className='mb-3'>60286 / Alawwa, Sri Lanka</p>
                            <p className='mb-3'> +94 7785462 </p>
                            <p className="mb-3">info.coffeecafe@gmail.com</p>

                            {/* social links */}
                            <div className="space-x-3 mt-6 " >
                                <a href="#" className="text-3xl inline-block hover:scale-105 duration-200">
                                    <CiFacebook/>
                                </a>


                                <a href="#" className="text-3xl inline-block hover:scale-105 duration-200">
                                    <CiYoutube/>
                                </a>

                                <a href="#" className="text-3xl inline-block hover:scale-105 duration-200">
                                    <CiInstagram/>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            
        </div>
      
    </div>
  )
}

export default Footer
