
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestData = [
    {
        id:1,
        name:"Rangana",
        text:"Two different meta-analyses found that people who drank five or more cups of coffee per day were 40-60% more likely to develop heart disease compared to those who did not drink coffee at all. ",
        img:"https://media.istockphoto.com/id/1360063450/photo/headshot-profile-picture-young-businessman-sit-in-kitchen-webcam-view.jpg?s=612x612&w=0&k=20&c=6DoR9bff-RQ5N31LV_tQPsj_hT1HPxGAIn07mLkLxgc=",
    },

    {
        id:2,
        name:"Kamalasiri",
        text:"Other studies have also shown that high coffee use (five to ten cups per day) increases the risk of heart disease, while moderate consumption (three to four cups daily) was not associated with a higher risk",
        img:"https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=1024x1024&w=is&k=20&c=4vOXvZRvhvchTRbYn9SknimKUNvKPZyJdGzHvtjqg_w="
    },

    {
        id:3,
        name:"Rangana",
        text:"Two different meta-analyses found that people who drank five or more cups of coffee per day were 40-60% more likely to develop heart disease compared to those who did not drink coffee at all. ",
        img:"https://media.istockphoto.com/id/1360063450/photo/headshot-profile-picture-young-businessman-sit-in-kitchen-webcam-view.jpg?s=612x612&w=0&k=20&c=6DoR9bff-RQ5N31LV_tQPsj_hT1HPxGAIn07mLkLxgc=",
    },

    {
        id:4,
        name:"Rangana",
        text:"Two different meta-analyses found that people who drank five or more cups of coffee per day were 40-60% more likely to develop heart disease compared to those who did not drink coffee at all. ",
        img:"https://media.istockphoto.com/id/1360063450/photo/headshot-profile-picture-young-businessman-sit-in-kitchen-webcam-view.jpg?s=612x612&w=0&k=20&c=6DoR9bff-RQ5N31LV_tQPsj_hT1HPxGAIn07mLkLxgc=",
    },

    {
        id:5,
        name:"Rangana",
        text:"Two different meta-analyses found that people who drank five or more cups of coffee per day were 40-60% more likely to develop heart disease compared to those who did not drink coffee at all. ",
        img:"https://media.istockphoto.com/id/1360063450/photo/headshot-profile-picture-young-businessman-sit-in-kitchen-webcam-view.jpg?s=612x612&w=0&k=20&c=6DoR9bff-RQ5N31LV_tQPsj_hT1HPxGAIn07mLkLxgc=",
    },

    {
        id:6,
        name:"Rangana",
        text:"Two different meta-analyses found that people who drank five or more cups of coffee per day were 40-60% more likely to develop heart disease compared to those who did not drink coffee at all. ",
        img:"https://media.istockphoto.com/id/1360063450/photo/headshot-profile-picture-young-businessman-sit-in-kitchen-webcam-view.jpg?s=612x612&w=0&k=20&c=6DoR9bff-RQ5N31LV_tQPsj_hT1HPxGAIn07mLkLxgc=",
    },

    {
        id:7,
        name:"Rangana",
        text:"Two different meta-analyses found that people who drank five or more cups of coffee per day were 40-60% more likely to develop heart disease compared to those who did not drink coffee at all. ",
        img:"https://media.istockphoto.com/id/1360063450/photo/headshot-profile-picture-young-businessman-sit-in-kitchen-webcam-view.jpg?s=612x612&w=0&k=20&c=6DoR9bff-RQ5N31LV_tQPsj_hT1HPxGAIn07mLkLxgc="
    },

    {
        id:8,
        name:"Rangana",
        text:"Two different meta-analyses found that people who drank five or more cups of coffee per day were 40-60% more likely to develop heart disease compared to those who did not drink coffee at all. ",
        img:"https://media.istockphoto.com/id/1360063450/photo/headshot-profile-picture-young-businessman-sit-in-kitchen-webcam-view.jpg?s=612x612&w=0&k=20&c=6DoR9bff-RQ5N31LV_tQPsj_hT1HPxGAIn07mLkLxgc="
    },

];




const Testimonials = () => {

    const settings = {
        dots:true,
        arrow:false,
        infinite:true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow:3,
                    slidesToScroll: 1,
                    infinite:true,
                },
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },

            {
                breakpoint: 640,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
                    
                },
            },

        
        ],

    };

  return (
    <div className="py-14 mb-10">
        <div className="container">

            {/* header section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold font-cursive text-gray-800">
                   Our Testimonials
                </h1>
            </div>

            {/* card section */}
            <div>
                <Slider {...settings}>
                    {TestData.map((data)=> {
                            return (
                                <div className="my-6" key={data.id}>
                                    
                                    <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">

                                        {/* image section */}
                                        <div className='mb-4'>
                                            <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                                        </div>
                                        
                                    </div>
                                    
                            </div>
                            )
                        })
                    }
                </Slider>
            </div>


        </div>
      
    </div>
  )
}

export default Testimonials
