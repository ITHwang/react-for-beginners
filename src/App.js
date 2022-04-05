import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { Offline } from "./routes/Offline";
import { useNetwork } from "./hooks/useNetwork";

const App = () => {
  const handleNetworkChange = (isOnline) => {
    if (!isOnline) {
      alert("offline now.");
      window.location.href = "/offline";
    }
  };
  const isOnline = useNetwork(handleNetworkChange);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/offline" element={<Offline />} />
      </Routes>
    </Router>
  );
};

export default App;
