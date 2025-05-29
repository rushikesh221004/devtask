import FeaturedJobs from "../components/FeaturedJobs"
import Hero from "../components/Hero"
import RecentJobs from "../components/RecentJobs"

const Home = () => {
  return (
     <div className="min-h-screen pb-20 w-full">
        <div className="xl:max-w-[1250px] flex flex-col items-center mx-auto">
          <Hero />
          <FeaturedJobs/>
          <RecentJobs/>
        </div>
      </div>
  )
}

export default Home