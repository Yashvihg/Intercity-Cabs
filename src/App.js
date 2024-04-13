import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocalTrips from "./pages/localTrips/localTrips";
import TravelsPage from "./pages/travelsPage/travelsPage";
import Toilets from "./components/toilets/toilets";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TravelsPage />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="localtrips" element={<LocalTrips />} />
          <Route path="toilets" element={<Toilets />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
