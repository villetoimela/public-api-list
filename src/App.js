import ApiList from "./components/ApiList";
import ButtonFilter from "./components/ButtonFilter";
import Header from "./components/Header";
import useAxios from "./hooks/useAxios";
import { useEffect } from "react";

function App() {
  const { fetchData, response, loading } = useAxios('entries');

  useEffect(() => {
    fetchData({ params: { category: 'Animals' } });
  }, []);
  


  return (
    <div className="">
      <Header fetchData={fetchData} />
      <div className="container mx-auto max-w-6xl">
        <ButtonFilter fetchData={fetchData} />
        <ApiList response={response} loading={loading} />
      </div>
    </div>
  );
}

export default App;
