import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar/>
        <Hero />
      </div>
    </>
  );
}

export default App;
