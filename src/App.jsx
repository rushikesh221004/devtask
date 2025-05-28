import FeaturedJobs from "./components/FeaturedJobs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentJobs from "./components/RecentJobs";

function App() {
  return (
    <>
      <div className="min-h-screen pb-20 w-full">
        <Navbar />
        <div className="xl:max-w-[1250px] flex flex-col items-center mx-auto">
          <Hero />
          <FeaturedJobs/>
          <RecentJobs/>
        </div>
      </div>
    </>
  );
}

export default App;
