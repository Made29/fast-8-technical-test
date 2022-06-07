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

                {/* Body 2 */}

                <div className="bg-gray-200 w-full p-5 h-full">

                        {/* Headers */}

                        <div className="bg-white flex flex-col lg:flex-row justify-between rounded-md p-2 mb-1 text-left">
                            <div className="lg:text-left">
                                <h1 className="text-teal-500 text-3xl font-bold">PERSONNEL LIST</h1>
                                <h1 className="text-gray-500 text-xl">List of all personnels</h1>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:space-x-3 lg:items-center space-y-1">
                                <input type="text" className="lg:w-40 h-8 border px-1" placeholder="Find Personnel"/>
                                <button className="bg-teal-500 lg:w-40 h-8 text-white hover:bg-teal-700">ADD PERSONNEL</button>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="flex flex-col lg:flex-row gap-3 lg:pt-5">
                            <div className="bg-white mt-2 rounded-xl py-2 w-full lg:w-[25%]">
                                <div className="flex justify-between mx-2 h-[20%] lg:h-[8%]">
                                    <div className="flex space-x-1">
                                        <h1>Personnel ID:</h1>
                                        <h1 className="text-teal-500">123456789</h1>
                                    </div>
                                    <h1 className="flex items-center"><FaEllipsisH/></h1>
                                </div>

                                <hr />

                                <div className="flex flex-row justify-between h-[80%] lg:flex-col lg:">
                                    <div className="flex justify-center items-center w-[40%] lg:w-full ">
                                        <h1 className="w-24 h-24 flex items-center justify-center rounded-full border-2 lg:h-32 lg:w-32 lg:my-2">PHOTO</h1>
                                    </div>
                                    <div className="w-[60%] lg:w-full text-left p-2 space-y-1">
                                        <div>
                                            <h1 className="text-sm font-bold">Name</h1>
                                            <h1>Made Jayendra W K</h1>
                                        </div>
                                        <div>
                                            <h1 className="text-sm font-bold">Phone Number</h1>
                                            <h1>083216548965</h1>
                                        </div>
                                        <div>
                                            <h1 className=" hidden lg:block text-sm font-bold">Birthdat</h1>
                                            <h1 className=" hidden lg:block">DD-MM</h1>
                                        </div>
                                        <div>
                                            <h1 className=" hidden lg:block text-sm font-bold">Email</h1>
                                            <h1 className=" hidden lg:block">Email Address</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white mt-2 rounded-xl py-2 w-full lg:w-[25%]">
                                <div className="flex justify-between mx-2 h-[20%] lg:h-[8%]">
                                    <div className="flex space-x-1">
                                        <h1>Personnel ID:</h1>
                                        <h1 className="text-teal-500">123456789</h1>
                                    </div>
                                    <h1>...</h1>
                                </div>

                                <hr />

                                <div className="flex flex-row justify-between h-[80%] lg:flex-col lg:">
                                    <div className="flex justify-center items-center w-[40%] lg:w-full ">
                                        <h1 className="w-24 h-24 flex items-center justify-center rounded-full border-2 lg:h-32 lg:w-32 lg:my-2">PHOTO</h1>
                                    </div>
                                    <div className="w-[60%] lg:w-full text-left p-2 space-y-1">
                                        <div>
                                            <h1 className="text-sm font-bold">Name</h1>
                                            <h1>Made Jayendra W K</h1>
                                        </div>
                                        <div>
                                            <h1 className="text-sm font-bold">Phone Number</h1>
                                            <h1>083216548965</h1>
                                        </div>
                                        <div>
                                            <h1 className=" hidden lg:block text-sm font-bold">Birthdat</h1>
                                            <h1 className=" hidden lg:block">DD-MM</h1>
                                        </div>
                                        <div>
                                            <h1 className=" hidden lg:block text-sm font-bold">Email</h1>
                                            <h1 className=" hidden lg:block">Email Address</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}

                        <div className="hidden lg:block">
                            <div className="h-[10%] flex justify-center items-center space-x-3 pt-5">
                                <div>
                                    <h1>Previous</h1>
                                </div>
                                <div>
                                    <h1>Next</h1>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>
        </div>
    )
}