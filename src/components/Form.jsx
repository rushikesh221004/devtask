import React from "react";

const Form = () => {
  return (
    <div className="w-[90%] mt-16 lg:mt-32">
      <h1 className="text-4xl pb-4 xl:pb-10 sm:text-4xl lg:text-5xl md:w-[600px] font-bold">
        Post a job on DevTask
      </h1>
      <p className="text-black">
        Post a job and reach +15,000 qualified professionals directly from our
        newsletters and +160,000 from our website.{" "}
        <span className="text-[#0057ff] font-semibold">
          We charge a single fee of $50 for post
        </span>
      </p>

      <div className="w-full flex flex-col gap-8 md:px-12 md:py-12 border-[1px] px-6 py-6 border-gray-200 rounded-2xl mt-16">
        <div className="flex flex-col gap-3">
          <label htmlFor="jobTitle" className="font-semibold">
            Job title <span className="text-red-600">*</span>
          </label>
          <input
            id="jobTitle"
            type="text"
            placeholder="e.g. Senior iOS Developer"
            className="border-[1px] border-gray-200 rounded-lg py-4 px-4"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="jobLocation" className="font-semibold">
            Job location <span className="text-red-600">*</span>
          </label>
          <input
            id="jobLocation"
            type="text"
            placeholder="e.g. New York, USA"
            className="border-[1px] border-gray-200 rounded-lg py-4 px-4"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="jobType" className="font-semibold">
            Job type <span className="text-red-600">*</span>
          </label>
          <input
            id="jobType"
            type="text"
            placeholder="e.g. full-time, part-time, freelancer..."
            className="border-[1px] border-gray-200 rounded-lg py-4 px-4"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="jobDesc" className="font-semibold">
            Job description (URL) <span className="text-red-600">*</span>
          </label>
          <input
            id="jobDesc"
            type="url"
            placeholder="http://"
            className="border-[1px] border-gray-200 rounded-lg py-4 px-4"
          />
          <p className="text-[12px] text-gray-500">Please add a Google Docs URL or any other link to which we can read the job description.</p>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="peopleApply" className="font-semibold">
            Where people can apply? <span className="text-red-600">*</span>
          </label>
          <input
            id="peopleApply"
            type="url"
            placeholder="http://"
            className="border-[1px] border-gray-200 rounded-lg py-4 px-4"
          />
          <p className="text-[12px] text-gray-500">A URL or email address to which applicants can send their applications.</p>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="companyWebsite" className="font-semibold">
            Company website <span className="text-red-600">*</span>
          </label>
          <input
            id="companyWebsite"
            type="url"
            placeholder="http://"
            className="border-[1px] border-gray-200 rounded-lg py-4 px-4"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="font-semibold">
            Your email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            type="text"
            placeholder="email@domain.com"
            className="border-[1px] border-gray-200 rounded-lg py-4 px-4"
          />
          <p className="text-[12px] text-gray-500">Stays private. Used for internal communication and invoicing.</p>
        </div>

        <div>
          <p className="font-bold mb-4">Make your job stand out (recommended)</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <input id="hundred" type="checkbox" className="scale-150"/>
              <label htmlFor="hundred" className="text-sm font-semibold text-gray-700">Spotlight 1 week ($100)</label>
              <label htmlFor="hundred" className="text-[12px] text-[#0057ff] bg-[#e6ecfd] px-3 rounded-[15px] border-[1px] border-[#a7c2f6] font-semibold w-fit whitespace-nowrap">
                  4x more views
                </label>
            </div>
            <div className="flex items-center gap-3">
              <input id="twoFifty" type="checkbox" className="scale-150"/>
              <label htmlFor="twoFifty" className="text-sm font-semibold text-gray-700">Spotlight 4 week ($250)</label>
              <label htmlFor="twoFifty" className="text-[12px] text-[#0057ff] bg-[#e6ecfd] px-3 rounded-[15px] border-[1px] border-[#a7c2f6] font-semibold w-fit whitespace-nowrap">
                  12x more views
                </label>
            </div>
          </div>
        </div>

        <button className=" w-full hover:cursor-pointer flex items-center justify-center border-none px-4 md:flex md:items-center md:gap-2 py-5 bg-[#0057FF] text-white rounded-full font-semibold">
              Post job (starting at $50)
            </button>

            <p className="text-sm font-semibold text-gray-700 text-center">You will be sent an email with a Stripe checkout link.</p>
      </div>
    </div>
  );
};

export default Form;
