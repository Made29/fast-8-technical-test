import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Pagination from "../components/Pegination";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUser } from "../store/actions/action";

export default function HomePage() {
    const dispatch = useDispatch();

    const [string, setString] = useState("");

    const data = useSelector((state) => state.users);

    let searchFilter = data.users.filter(el => {
        let count = 0
        for (let i = 0; i < el.name.first.length; i++) {
            if (el.name.first[i].toLowerCase() === string[i]) {
                count++
            }
        }
        if (count === string.length) {
            return true
        }
        
        count = 0
        for (let i = 0; i < el.name.last.length; i++) {
            if (el.name.last[i].toLowerCase() === string[i]) {
                count++
            }
        }
        if (count === string.length) {
            return true
        }
    });

    const [pagination, setPagination] = useState(0);

    const filterData = searchFilter.slice(pagination, pagination + 4);

    useEffect(() => {
        dispatch(fetchAllUser());
    }, [dispatch]);

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

                    <Header str={setString} />

                    {/* Card */}
                    <div className="flex flex-col lg:flex-row gap-3 lg:pt-5">
                        {filterData.map((users) => (
                            <Card el={users} />
                        ))}
                    </div>

                    {/* Pagination */}

                    <Pagination page={setPagination} currentPage={pagination} data={data.users}/>
                </div>
            </div>
        </div>
    );
}
