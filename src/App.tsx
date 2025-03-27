import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Main from "./components/Main";
import Specimen from "./components/Specimen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path=":path?" element={<Main />} />
          <Route path="specimen/:family" element={<Specimen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
