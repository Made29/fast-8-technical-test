import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Pagination from "../components/Pegination";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchAllUser } from "../store/actions/action"

export default function HomePage() {
    const dispatch = useDispatch()

    const data = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(fetchAllUser())
    }, [dispatch])

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
