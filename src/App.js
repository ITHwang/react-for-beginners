import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { Offline } from "./routes/Offline";
import { useNetwork } from "./hooks/useNetwork";
import useAxios from "./hooks/useAxios";

const App = () => {
  const handleNetworkChange = (isOnline) => {
    if (!isOnline) {
      alert("offline now.");
      window.location.href = "/offline";
    }
  };
  const isOnline = useNetwork(handleNetworkChange);

  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json",
  });

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h1>{loading ? "Loading" : "loaded"}</h1>
      <button onClick={refetch}>refetch</button>
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/movie/:id" element={<Detail />} />
    //     <Route path="/offline" element={<Offline />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
