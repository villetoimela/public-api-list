
const ApiCard = ({ api }) => {
const renderDetail = (text, field) => <p>{text}: <span className="font-semibold">
    {api[field] || "-"}</span></p>

  return (
    <a href={api.Link} target="_blank">
        <div className="border-2 p-2 shadow-xl border-sky-500 text-sky-900 rounded-md bg-sky-200 hover:bg-sky-300 duration-300 hover:scale-105 cursor-pointer h-full">
            {renderDetail("Title", "API")}
            {renderDetail("Description", "Description")}
            {renderDetail("Auth", "Auth")}
            {renderDetail("Cors", "Cors")}
            {renderDetail("Category", "Category")}
        </div>
    </a>
  )
}

export default ApiCard