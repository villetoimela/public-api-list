
const ApiCard = ({ api }) => {
const renderDetail = (text, field) => <p>{text}: <span className="font-semibold">
    {api[field] || "-"}</span></p>

  return (
    <a href={api.Link} target="_blank">
        <div className="border-2 p-2 border-sky-500 text-gray-600 rounded-md bg-sky-100 hover:bg-sky-300 cursor-pointer h-full">
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