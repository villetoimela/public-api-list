import ApiCard from "./ApiCard"

const ApiList = ({ response, loading }) => {

    if(loading) {
        return (
            <div className="mt-2 grid md:grid-cols-3 gap-4 animate-pulse">
                {[...Array(12).keys()].map(num => (
                    <div key={num} className="h-28 w-full bg-gray-300 m1- rounded-md"></div>
                ))}
            </div>
        )
    }

    if(!response.entries) {
        return <p className="text-center text-gray-500 text-2xl mt-20">Something went wrong 😥</p>
    }


  return (
    <div className="mx-2 mb-10">
        <h3 className="font-semibold text-xl text-slate-600">API list</h3>
        <div className="grid gap-4 md:grid-cols-4">
        {response.entries && response.entries.map((api, index) => <ApiCard api={api} key={index} />)}
        </div>
    </div>
  )
}

export default ApiList