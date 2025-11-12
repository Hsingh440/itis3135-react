import { BrowserRouter, Routes, Route } from "react-router";

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import Introduction from './pages/Introduction.jsx';
import Contract from './pages/Contract.jsx';


function App() {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Contract" element={<Contract />} />
        {/* Optional: Add a catch-all for 404 pages */}
        {/* <Route path="*" element={<h2>404 Not Found</h2>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
