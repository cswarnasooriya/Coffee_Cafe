import HeroImg from '../../public/h1.png';

const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">

                {/* text section */}
                <div className='pt-20 sm:order-1 order-2'>
                    <h1 data-aos="fade-up" data-aos-once="true"  className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                        We are the Richest <span data-aos="zoom-out" data-aos-delay="300"className="text-primary font-cursive">Coffee</span> in Sri Lanka...
                    </h1>

                    <div data-aos="fade-down" data-aos-delay="400" className="pt-4">
                        <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full text-white px-4 py-2 hover:scale-105 duration-200">
                            Coffee And Code
                        </button>

                    </div>

                </div>

                {/* image section */}
                <div data-aos="zoom-in" data-aos-delay="300" className="min-h-[420px] flex justify-center items-center order-1 sm:order-2 mt-8 sm:mt-0 relative">
                    <img src={HeroImg} alt="hero image" className="sm:w-[420px] w-[320px] sm:scale-110 mx-auto spin" />

                    <div data-aos="fade-left" data-aos-delay="400" className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl">
                        <h1 className="text-xl">Hey Guys!</h1>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="400" className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl">
                        <h1 className="text-xl">Best Coffee</h1>
                    </div>

                    
                    <div data-aos="fade-left" data-aos-delay="400" className="bg-gradient-to-r from-primary to-secondary absolute top-12 right-10 p-3 rounded-xl">
                        <h1 className="text-xl">Just Order</h1>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="400" className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 left-10 p-3 rounded-xl">
                        <h1 className="text-xl">Fresh & Taste</h1>
                    </div>
                </div>

               
            </div>
        </div>
      
    </div>
  )
}

export default Home
