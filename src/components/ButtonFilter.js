import { useEffect } from "react";
import useAxios from "../hooks/useAxios"



const ButtonFilter = ( { fetchData: fetchApi }) => {
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

    const clickFilterButton = (e) => {
        fetchApi({ params: {category: e.target.value}})
    }

    return (
        <div className="text-center my-10">
            <h1 className="font-semibold text-xl text-sky-900 pb-2">Search by category</h1>
            {categories && categories.map(button => (
                <button
                key={button}
                onClick={clickFilterButton}
                value={button}
                    className="bg-sky-400 shadow-xl text-white m-1 py-1 px-2 rounded-md hover:bg-sky-500 duration-300 hover:scale-105">
                    {button}
                </button>
            ))}
        </div>
    )
}

export default ButtonFilter