import { FaSistrix, FaPlus } from "react-icons/fa";

export default function Header() {
    return (
        <div className="bg-white flex flex-col lg:flex-row justify-between rounded-md p-2 mb-1 text-left">
            <div className="lg:text-left">
                <h1 className="text-teal-500 text-3xl font-bold">
                    PERSONNEL LIST
                </h1>
                <h1 className="text-gray-500 text-xl">
                    List of all personnels
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-3 lg:items-center space-y-1">
                <div className="flex items-center justify-center h-10">
                    <div className="border-y-2 border-l-2 h-full pl-2">
                        <FaSistrix className="text-teal-700 font-bold text-xl h-full" />
                    </div>
                    <input
                        type="text"
                        className="lg:w-40 w-full h-10 px-1 border-r-2 border-y-2 focus:outline-none"
                        placeholder="Find Personnels"
                    />
                </div>
                <button className="bg-teal-500 lg:w-40 h-10 text-white hover:bg-teal-700 text-sm">
                    <div className="flex items-center justify-between px-3">
                        ADD PERSONNEL
                        <FaPlus />
                    </div>
                </button>
            </div>
        </div>
    );
}
