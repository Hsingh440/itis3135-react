import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Contract from "./pages/Contract";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     {/* <Route path="/introduction" element={<Introduction />} /> */}
    //     {/* <Route path="/contract" element={<Contract />} /> */}
    //   </Routes>
    // </BrowserRouter>
    <Home/>
  );
}

export default App;
