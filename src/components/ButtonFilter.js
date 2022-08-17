import { useEffect } from "react";
import useAxios from "../hooks/useAxios"


const ButtonFilter = () => {
    const { fetchData, response: { categories }, loading } = useAxios('categories');

    useEffect(() => {
        fetchData();
    }, []);

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