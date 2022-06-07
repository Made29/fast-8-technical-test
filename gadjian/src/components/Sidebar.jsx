import { FaHome, FaUsers, FaRegCalendarAlt } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="bg-white w-0 lg:w-1/4">
            <div className="bg-white text-left m-5 space-y-3">
                <button className="flex space-x-2 items-center active:text-teal-500 hover:text-teal-500">
                    <FaHome />
                    <h1>Beranda</h1>
                </button>
                <button className="flex space-x-2 items-center active:text-teal-500 hover:text-teal-500">
                    <FaUsers />
                    <h1>Personnel List</h1>
                </button>
                <button className="flex space-x-2 items-center active:text-teal-500 hover:text-teal-500">
                    <FaRegCalendarAlt />
                    <h1>Daily Attendance</h1>
                </button>
            </div>
        </div>
    );
}
