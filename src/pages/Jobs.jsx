import React from 'react'
import FindDreamJob from '../components/FindDreamJob'
import AllJobs from '../components/AllJobs'

const Jobs = () => {
  return (
    <div className="min-h-screen pb-20 w-full">
        <div className="xl:max-w-[1250px] flex flex-col items-center mx-auto">
            <FindDreamJob/>
            <AllJobs/>
        </div>
    </div>
  )
}

export default Jobs