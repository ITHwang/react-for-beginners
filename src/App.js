import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { Offline } from "./routes/Offline";
import { useNetwork } from "./hooks/useNetwork";

import { useFullscreen } from "./hooks/useFullscreen";

const App = () => {
  const handleNetworkChange = (isOnline) => {
    if (!isOnline) {
      alert("offline now.");
      window.location.href = "/offline";
    }
  };
  const isOnline = useNetwork(handleNetworkChange);

  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);

  return (
    // <div className="App" style={{ height: "1000vh" }}>
    //   <div ref={element}>
    //     <img src="https://picsum.photos/500/300" />
    //     <button onClick={exitFull}>Exit fullscreen</button>
    //   </div>
    //   <button onClick={triggerFull}>Make fullscreen</button>
    // </div>

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
