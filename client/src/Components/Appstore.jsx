import AppstoreImg from '../../public/appstore.png';
import PlaystoreImg from '../../public/playstore.png';
import BgApp from '../../public/text.png';


const appBannerImage = {
    backgroundImage: `url(${BgApp})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width:"100%",
    height:"100%",

};


const Appstore = () => {
  return (
    <>
        <div style={appBannerImage} className="py-14">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                {/* text content */}
                <div className="space-y-6 max-w-xl mx-auto">
                    <div className="items-center justify-center text-center bg-red-100 rounded-full p-4 m-0">
                        <h1 className="text-2xl font-mono text-center sm:text-left sm:text-3xl font-semibold pl-3 text-black ">
                            Coffee Cafe is Available Now for all Android and IOS
                        </h1>
                    </div>
                </div>

                {/* logo section */}
                <div className="flex flex-wrap justify-center sm:justify-start items-center">
                    <a href="#">
                        <img src={AppstoreImg} alt="App store image"
                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] hover:scale-110 duration-200" />
                    </a>

                    <a href="#">
                        <img src={PlaystoreImg} alt="App store image"
                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] hover:scale-110 duration-200" />
                    </a>
                </div>

                </div>
            </div>
        </div>
      
    </>
  )
}

export default Appstore
