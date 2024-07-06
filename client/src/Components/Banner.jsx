import BannerImg from '../../public/BannerImg.png';
import BgTexture from '../../public/text.png';
import { CiLock } from "react-icons/ci";
import { FaShippingFast } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";

const bgImage = {
    backgroundImage: `url(${BgTexture})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width:"100%",
    height:"100%",

};


const Banner = () => {
  return (
    <>
        <div style={bgImage}>
            <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* image section */}
                    <div>
                        <img src={BannerImg} alt="Banner image"
                        className="max-w-[380px] w-full mx-auto spin drop-shadow-xl" />
                    </div>

                    {/* text content section */}

                    <div className="flex flex-col justify-center gap-10 sm:pt-0">
                        <h1 className="text-3xl sm:text-4xl font-bold font-cursive text-white">
                            Premium Blend Coffee
                        </h1>

                        <p className="text-sm text-gray-300 tracking-wide leading-5">
                        The Toscana Ceylon project is married to a CSR and sustainability project which is dedicated to the wellbeing of Sri Lankan coffee farmers and families that get involved in process of coffee processing. 
                        <br /><br />
                        Part of the Colombo Coffee Company, Toscana Ceylon is proudly Sri Lankan and is working to help improve the local coffee industry, sustaining the harvesting of coffee with both our people and the planet in mind. 
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-5">

                                <div className="flex items-center gap-3">
                                    <CiLock className="text-3xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                                    <span className="text-red-200">Secure Premium Quality</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <IoStorefrontOutline className="text-3xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                                    <span className="text-red-200"> 180+ Online Stores</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaShippingFast className="text-3xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                                    <span className="text-red-200">24 Hrs Delivery</span>
                                </div>
                            </div>

                            <div className="space-y-5 border-red-400 border-l-4 pl-8">
                                <h1 className="text-red-100 font-semibold font-cursive">Coffee Lover!</h1>
                                <p className="text-red-200 text-sm">
                                    {" "}
                                    Coffee is a beverage brewed from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks. It has the highest sales in the world market for hot drinks.

                                    

                                </p>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </>
  )
}

export default Banner
