import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./component/Header";
import Description from "./Description";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/" element={<Home />} />
        <Route path="/product/:id" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
