import logo from '../../public/c1.png';
import { FaCoffee } from "react-icons/fa";


const Menus =[
    {
        id:1,
        name:"Home",
        link:"/home"
    },
    {
        id:2,
        name:"Services",
        link:"/services"
    },
    {
        id:1,
        name:"About",
        link:"/about"
    },
];


const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
        <div className="container py-2">

            <div className="flex justify-between text-white items-center gap-4">

                {/* logo section */}
                <div className="">
                    <a href="#" className="font-bold text-2xl sm:text-2xl flex justify-center items-center gap-4 tracking-wider font-cursive">
                        <img src={logo} alt="logo" className="w-16 text-white" />
                        Coffee Cafe
                    </a>
                </div>


                {/* link section */}
                <div className="flex justify-between items-center gap-6">
                    <ul className="hidden sm:flex items-center gap-6">

                    {
                        Menus.map(({id, name, link}) => (
                            <li key={id}>
                                <a href={link} className="inline-block text-xl py-4 px-4 text-white/80 hover:text-white duration-200">
                                    {name}
                                </a>
                            </li>
                        
                    ))}
                    
                    </ul>

                    <button className=" bg-primary/80 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
                       
                        Order
                        <FaCoffee className="text-xl cursor-pointer" />

                    </button>


                </div>


            </div>
        </div>
      
    </div>
  )
}

export default Navbar
