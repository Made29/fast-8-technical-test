import { FaEllipsisH } from "react-icons/fa";

export default function Card({ el }) {
    const month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const birthDate = new Date(el.dob.date);
    const date = `${birthDate.getDay()}-${month[birthDate.getMonth()]}`;

    return (
        <div className="bg-white mt-2 rounded-xl py-2 w-full lg:w-[25%] h-full">
            <div className="flex justify-between mx-2 h-[20%] lg:h-[8%]">
                <div className="flex space-x-1">
                    <h1>Personnel ID:</h1>
                    <h1 className="text-teal-500 text-base">{el.id.value}</h1>
                </div>
                <h1 className="flex items-center">
                    <FaEllipsisH />
                </h1>
            </div>

            <hr />

            <div className="flex flex-row justify-between h-[80%] lg:flex-col lg:">
                <div className="flex justify-center items-center w-[40%] lg:w-full ">
                    <img
                        src={el.picture.large}
                        className="w-24 h-24 flex items-center justify-center rounded-full border-2 lg:h-32 lg:w-32 lg:my-2"
                    />
                </div>
                <div className="w-[60%] lg:w-full text-left p-2 space-y-1">
                    <div>
                        <h1 className="text-sm font-bold">Name</h1>
                        <h1>
                            {el.name.title} {el.name.first} {el.name.last}{" "}
                        </h1>
                    </div>
                    <div>
                        <h1 className="text-sm font-bold">Phone Number</h1>
                        <h1>{el.phone}</h1>
                    </div>
                    <div>
                        <h1 className=" hidden lg:block text-sm font-bold">
                            Birthdat
                        </h1>
                        <h1 className=" hidden lg:block">{date}</h1>
                    </div>
                    <div>
                        <h1 className=" hidden lg:block text-sm font-bold">
                            Email
                        </h1>
                        <h1 className=" hidden lg:block">{el.email}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
