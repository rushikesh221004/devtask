import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-auto md:flex-row-reverse md:justify-between md:px-6 px-4 flex flex-col gap-6 border-t-[1px] py-6 border-gray-300 w-full">
      <div className="flex items-center gap-3">
        <a href="https://www.instagram.com/rushikesh_manjre/" target="_blank">
          <div className="p-4 hover:cursor-pointer hover:bg-gray-200 rounded-full bg-[#F5F5F5] text-xl">
            <IoLogoInstagram />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/rushikesh-manjre-690350295/?originalSubdomain=in"
          target="_blank"
        >
          <div className="p-4 hover:cursor-pointer hover:bg-gray-200 rounded-full bg-[#F5F5F5] text-xl">
            <FaLinkedin />
          </div>
        </a>
      </div>
      <div className="flex items-center md:justify-normal md:gap-16 justify-between">
        <p className="text-[14px] md:text-[16px]">&copy; 2024 DevTask.</p>
        <p className="text-[14px] md:text-[16px] hover:underline  cursor-pointer">
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
