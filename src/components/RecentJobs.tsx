import { BsDot } from "react-icons/bs";

const RecentJobs = () => {
  const jobListings = [
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f75518_company-07.png",
      company: "Company AQ",
      jobType: "Freelancer",
      position: "React Native Mobile Developer",
      date: "Sep 14, 2024",
      location: "Palo Alto, CA",
      remote: true,
    },

    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f7551a_company-09.png",
      company: "Company PD",
      jobType: "Part-time",
      position: "Python Developer",
      date: "Sep 13, 2024",
      location: "London, UK",
      remote: true,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f75519_company-08.png",
      company: "Company LK",
      jobType: "Full-time",
      position: "Senior JavaScript Developer",
      date: "Sep 13, 2024",
      location: "Atlanta, USA",
      remote: true,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f7551b_company-10.png",
      company: "Company RT",
      jobType: "Internship",
      position: "PHP Developer",
      date: "Sep 12, 2024",
      location: "Amsterdam, NL",
      remote: false,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f7551c_company-11.png",
      company: "Company IU",
      jobType: "Full-time",
      position: "Senior Web Developer",
      date: "Sep 11, 2024",
      location: "Berlin, GER",
      remote: true,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f7551d_company-12.png",
      company: "Company OB",
      jobType: "Full-time",
      position: "Java Developer",
      date: "Sep 10, 2024",
      location: "Seatle, USA",
      remote: true,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f7551e_company-13.png",
      company: "Company SS",
      jobType: "Freelancer",
      position: "Software Enginner (C++)",
      date: "Sep 9, 2024",
      location: "Denver, USA",
      remote: true,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f7551f_company-14.png",
      company: "Company KW",
      jobType: "Full-time",
      position: "Swift UI Developer (iOS, macOS, watchOS)",
      date: "Sep 8, 2024",
      location: "San Francisco, USA",
      remote: false,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f75520_company-15.png",
      company: "Company DS",
      jobType: "Internship",
      position: "Ruby on Rails Developer",
      date: "Sep 7, 2024",
      location: "Boston, USA",
      remote: false,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f75521_company-16.png",
      company: "Company FF",
      jobType: "Full-time",
      position: "AWS Full Stack Engineer (Node.js, Typescript)",
      date: "Sep 6, 2024",
      location: "Madrid, SP",
      remote: false,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f75523_company-18.png",
      company: "Company FT",
      jobType: "Freelancer",
      position: "Python + SQL Developer",
      date: "Sep 5, 2024",
      location: "Zurich, SZ",
      remote: true,
    },
    {
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f7550b/66f2f083f5b8de8e38f75522_company-17.png",
      company: "Company CV",
      jobType: "Part-time",
      position: "Kotlin Multiplatform Mobile (KMM) Developer",
      date: "Sep 5, 2024",
      location: "Paris, FR",
      remote: true,
    },
  ];
  return (
    <div className="w-[90%] mt-20">
      <h1 className="text-3xl pb-4 xl:pb-10 sm:text-4xl md:w-[600px] font-bold">
        Recent Jobs
      </h1>
      <div>
        <div className="w-full flex flex-col gap-4">
          {jobListings.map((job, index) => (
            <div className="flex md:flex-row md:px-4 md:items-center md:justify-between md:w-full gap-3 hover:bg-gray-50 cursor-pointer flex-col items-center border-[1px] border-gray-300 py-8 rounded-2xl">
            <div className="flex flex-col items-center md:flex-row">
              <div className="h-16 rounded-full border-[1px] border-gray-300 w-16">
                <img
                  src={job.logo}
                  alt="logo"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center md:items-start md:pl-4">
                <p className="text-gray-500 text-[16px] font-semibold flex items-center">
                  {job.company} <BsDot className="text-xl" /> {job.jobType}
                </p>
                <h2 className="text-xl font-semibold text-center md:text-start px-4 md:px-0 md:text-2xl">
                  {job.position}
                </h2>
              </div>
            </div>
            <div className="w-full md:w-fit gap-2 md:items-end flex flex-col items-center">
              <div className="text-[12px] text-[#0057ff] bg-[#e6ecfd] px-3 rounded-[15px] border-[1px] border-[#a7c2f6] font-semibold w-fit">
                {job.date}
              </div>
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
    </div>
  );
};

export default RecentJobs;
