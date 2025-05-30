import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full text-black flex justify-between items-center py-5 border-b-[1px] border-b-gray-300 px-4 ">
      <div className="flex items-center gap-6 md:gap-10">
        <Link to="/">
          <p className="font-semibold text-lg md:text-xl md:font-bold cursor-pointer">
            DEVTask
          </p>
        </Link>
        <Link to="/jobs">
          <p className="text-sm md:text-[16px] cursor-pointer hover:text-blue-600">
            Find jobs
          </p>
        </Link>
      </div>
      <Link to="/post-a-job">
        <button className="text-sm hover:cursor-pointer border-none px-4 md:flex md:items-center md:py-2 md:gap-2 py-1 bg-[#0057FF] text-white rounded-full font-semibold">
          <FaPlusCircle className="hidden md:block" />
          Post a job
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
