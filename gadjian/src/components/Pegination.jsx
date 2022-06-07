import { FaAngleRight, FaAngleLeft } from "react-icons/fa"

export default function Pagination() {
    return (
        <div className="hidden lg:block">
            <div className="h-[10%] flex justify-center items-center space-x-10 pt-4">
                <button className="flex items-center justify-center hover:text-gray-500">
                    <FaAngleLeft />
                    <h1 className="text-left">Previous Page</h1>
                </button>
                <button className="flex items-center justify-center hover:text-gray-500">
                    <h1 className="text-left">Next Page</h1>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
}