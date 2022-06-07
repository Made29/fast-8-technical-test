import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Pagination from "../components/Pegination";

export default function HomePage() {
    return (
        <div className="lg:h-screen h-full">
            {/* Navbar */}

            <Navbar />

            {/* Body 1 */}

            <div className="h-[85%] flex">

                {/* Sidebar */}

                <Sidebar />

                {/* Body 2 */}

                <div className="bg-gray-200 w-full p-5 h-full">
                    
                    {/* Headers */}

                    <Header />

                    {/* Card */}
                    <div className="flex flex-col lg:flex-row gap-3 lg:pt-5">
                        <Card />
                    </div>

                    {/* Pagination */}

                    <Pagination />
                </div>
            </div>
        </div>
    );
}
