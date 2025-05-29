import { BsDot } from "react-icons/bs";

const FeaturedJobs = () => {
  const jobListings = [
    {
      logo: "https://cdn.prod.website-files.com/66e9839528db1d093c7c83a9/66e98a940b581015b5f0b357_company-01.png",
      company: "Company XY",
      jobType: "Full-time",
      position: "Senior iOS Developer",
      spotlight: true,
      location: "New York, USA",
      remote: true,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f75516_company-05.png",
      company: "Company MN",
      jobType: "Full-time",
      position: "AI / ML Engineer",
      spotlight: true,
      location: "San Francisco, USA",
      remote: false,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f75517_company-06.png",
      company: "Company RN",
      jobType: "Full-time",
      position: "Senior Full Stack Developer (React & Node JS)",
      spotlight: true,
      location: "Montreal, CA",
      remote: false,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f75513_company-02.png",
      company: "Company BB",
      jobType: "Freelancer",
      position: "Android/Kotlin Developer",
      spotlight: true,
      location: "Quebec, CA",
      remote: true,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f75515_company-04.png",
      company: "Company JG",
      jobType: "Internship",
      position: "Flutter Application Developer",
      spotlight: true,
      location: "Dublin, IR",
      remote: true,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f75514_company-03.png",
      company: "Company HH",
      jobType: "Full-time",
      position: "Senior C# . Net Application Developer",
      spotlight: true,
      location: "Austin, USA",
      remote: false,
    },
  ];

  return (
    <div className="w-[90%]">
      <h1 className="text-3xl pb-4 xl:pb-10 sm:text-4xl md:w-[600px] font-bold">
        Featured Jobs
      </h1>
      <div className="w-full grid grid-cols-1 grid-rows-6 gap-3 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
        {jobListings.map((job, index) => (
          <div key={index} className="flex gap-3 md:gap-5 hover:bg-gray-50 cursor-pointer flex-col items-center border-[1px] border-gray-300 py-8 rounded-2xl">
            <div className="h-16 rounded-full border-[1px] border-gray-300 w-16">
              <img
                src={job.logo}
                alt="logo"
                className="object-cover"
              />
            </div>
            <p className="text-gray-500 text-[16px] font-semibold flex items-center">
              {job.company} <BsDot className="text-xl" /> {job.jobType}
            </p>
            <h2 className="text-xl font-semibold text-center px-4 md:px-5 md:text-2xl">{job.position}</h2>
            <div className="w-full gap-2 flex flex-col items-center">
              {job.spotlight === true && <div className="text-[12px] text-[#c81e43] bg-[#f6f2f3] px-3 rounded-[15px] border-[1px] border-[#ebb3bf] font-semibold w-fit">
                In the spotlight
              </div>}
              <div className="flex gap-2">
                <p className="text-[12px] text-[#28a359] bg-[#f6f2f3] px-3 rounded-[15px] border-[1px] border-[#28a359] font-semibold w-fit">
                  {job.location}
                </p>
                {job.remote === true && <p className="text-[12px] text-[#28a359] bg-[#f6f2f3] px-3 rounded-[15px] border-[1px] border-[#28a359] font-semibold w-fit">
                  Remote
                </p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
