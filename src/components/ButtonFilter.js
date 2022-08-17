import { useEffect } from "react";
import useAxios from "../hooks/useAxios"


const ButtonFilter = () => {
    const { fetchData, response: { categories }, loading } = useAxios('categories');

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className=" animate-pulse my-5 inline-block text-center">
                {[...Array(35).keys()].map(num => (
                    <div key={num} className="h-7 w-20 bg-gray-300 m-1
                    rounded-md inline-block"></div>
                ))}
            </div>
        )
    }

    return (
        <div className="text-center my-10">
            {categories && categories.map(button => (
                <button
                    className="bg-sky-400 text-white m-1 py-1 px-2 rounded-md hover:bg-sky-500">
                    {button}
                </button>
            ))}
        </div>
    )
}

export default ButtonFilter