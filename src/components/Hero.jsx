import React from "react";

const Hero = () => {
  const testimonials = [
    {
      type: "company",
      name: "Company XYZ",
      logo: "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f75505/66f2f083f5b8de8e38f75551_company-05.png",
      quote:
        "One of the main advantages of posting jobs on Devtask is the skill level of the applicants. Some of the best talents in our team were found here.",
      author: "John Wick, CTO",
      results: {
        speed: "3–4x faster",
        hires: "+30",
      },
    },
    {
      type: "individual",
      name: "Tommy Abha",
      avatar:
        "https://cdn.prod.website-files.com/66f2f083f5b8de8e38f75505/66f2f083f5b8de8e38f75552_tommy.png",
      quote:
        "Using Devtalk lead me to amazing freelancing gigs and ultimately to a dream job at a major tech company.",
      author: "iOS developer at RockCode",
      results: {
        gigs: "+40",
        fullTime: "1",
      },
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-20">
      <div className="w-[90%] xl:max-w-[1200px] flex flex-col gap-4">
        <h1 className="text-4xl pb-4 xl:pb-10 sm:text-5xl md:w-[600px] font-bold">
          The #1 job board for software development
        </h1>
        <div className="w-full lg:flex-row flex flex-col gap-4 text-white">
          {testimonials.map((testimonial, index) => (
            <div
              className={` flex flex-col lg:w-[50%] gap-6 md:gap-10 px-6 py-6 xl:px-12 xl:py-14 rounded-2xl ${
                index === 1 ? "bg-[#13544E]" : "bg-[#133654]"
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <div className="h-16 rounded-full w-16">
                    <img
                      src={index === 0 ? testimonial.logo : testimonial.avatar}
                      alt="logo"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-gray-300">
                    {testimonial.name}
                  </p>
                </div>
                <p className="text-lg font-semibold md:text-xl xl:text-2xl">"{testimonial.quote}"</p>
                <p className="text-gray-300 font-semibold">
                  {testimonial.author}
                </p>
              </div>

              <div className={`${index == 1 ? "xl:mt-8": ""}`}>
                <p className="text-gray-300 font-semibold py-3">Results</p>
                <div className="flex border-t-gray-500 py-3 border-t-[1px] flex-col gap-5">
                  <div className="sm:flex sm: gap-8">
                    {testimonial.results.speed && (
                      <div>
                        <p className="text-xl xl:text-2xl font-semibold">
                          {testimonial.results.speed}
                        </p>
                        <p className="text-gray-300 font-semibold py-2">
                          to find our talents
                        </p>
                      </div>
                    )}
                    {testimonial.results.hires && (
                      <div>
                        <p className="text-xl xl:text-2xl font-semibold">
                          {testimonial.results.hires}
                        </p>
                        <p className="text-gray-300 font-semibold py-2">
                          professionals hired
                        </p>
                      </div>
                    )}

                    <div className="flex gap-8">
                      {testimonial.results.gigs && (
                      <div>
                        <p className="text-xl xl:text-2xl font-semibold">
                          {testimonial.results.gigs}
                        </p>
                        <p className="text-gray-300 font-semibold py-2">
                          freelancing gigs
                        </p>
                      </div>
                    )}
                    {testimonial.results.fullTime && (
                      <div>
                        <p className="text-xl xl:text-2xl font-semibold">
                          {testimonial.results.fullTime}
                        </p>
                        <p className="text-gray-300 font-semibold py-2">
                          full-time hiring
                        </p>
                      </div>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
