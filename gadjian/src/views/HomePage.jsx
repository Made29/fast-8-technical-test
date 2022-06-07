import { FaHome, FaEllipsisH, FaUsers, FaRegCalendarAlt, FaSistrix } from "react-icons/fa"

export default function HomePage(){
    
    return (
        <div className="h-screen">

            {/* Navbar */}

            <nav className="h-[15%] flex justify-between">
                <div className="w-[50%] flex items-center">
                    <img src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/e196fd5534bec8a1696b426156b889d3.png" alt="gadjian-logo" className="ml-5 w-28 lg:w-40"/>
                </div>
                <div className="flex space-x-3 items-center pr-3">
                    <div className="flex space-x-1">
                        <h1 className="hidden lg:block">Hello,</h1> 
                        <h1 className="text-teal-500 hidden lg:block">Gadjian User</h1>
                    </div>
                    <h1 className="w-14 h-14 flex items-center justify-center rounded-full border-2 lg:w-16 lg:h-16">Photo</h1>
                </div>
            </nav>

            {/* Body 1 */}

            <div className="h-[85%] flex">

                {/* Sidebar */}

                <div className="bg-white w-0 lg:w-1/4">
                    <div className="bg-white text-left m-5">
                        <div className="flex space-x-2 items-center active:text-teal-500 hover:text-teal-500 cursor-pointer">
                            <FaHome />
                            <h1>Beranda</h1>
                        </div>
                        <div className="flex space-x-2 items-center active:text-teal-500 hover:text-teal-500 cursor-pointer">
                            <FaUsers />
                            <h1>Personnel List</h1>
                        </div>
                        <div className="flex space-x-2 items-center active:text-teal-500 hover:text-teal-500 cursor-pointer">
                            <FaRegCalendarAlt/>
                            <h1>Daily Attendance</h1>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}