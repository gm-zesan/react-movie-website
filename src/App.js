import { Route, Routes } from "react-router";
import Error from "./Error";
import Home from "./Home";
import SingleMovie from "./SingleMovie";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
              path="/movie/:id"
              element={<SingleMovie></SingleMovie>}
          ></Route>
          <Route path="*" element={<Error></Error>}></Route>
      </Routes>
  );
}

export default App;
