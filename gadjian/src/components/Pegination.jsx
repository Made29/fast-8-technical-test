import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function Pagination({ page, currentPage, data }) {
    return (
        <div className="h-[10%] flex justify-center items-center space-x-10 pt-4">
            <button
                onClick={() =>
                    page(currentPage === 0 ? currentPage : currentPage - 4)
                }
                className={
                    currentPage === 0
                        ? "flex items-center justify-center cursor-not-allowed"
                        : "flex items-center justify-center hover:text-gray-500"
                }
            >
                <FaAngleLeft />
                <h1 className="text-left">Previous Page</h1>
            </button>
            <button
                onClick={() =>
                    page(
                        currentPage === data.length - 4
                            ? currentPage
                            : currentPage + 4
                    )
                }
                className={
                    currentPage === data.length - 4
                        ? "flex items-center justify-center cursor-not-allowed"
                        : "flex items-center justify-center hover:text-gray-500"
                }
            >
                <h1 className="text-left">Next Page</h1>
                <FaAngleRight />
            </button>
        </div>
    );
}
