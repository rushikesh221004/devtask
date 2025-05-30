import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Jobs from "./pages/Jobs";
import Footer from "./components/Footer";
import PostJob from "./pages/PostJob";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/post-a-job" element={<PostJob />} />
        </Routes>
        </main>
        <Footer/>
      </div> 
    </BrowserRouter>
  );
}

export default App;
