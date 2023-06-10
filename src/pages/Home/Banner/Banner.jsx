import TypewriterAnimation from "../../../components/TypewriterAnimation/TypewriterAnimation";
import "./banner.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import "aos/dist/aos.css";

const Banner = () => {
  return (
    <section className="">
      <div className=" banner-bg container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          {/* <p className="inline-block px-3 py-px mb-4 text-2xl font-bold  text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-sky-600">
            UNIQUE FASHION DESIGN COURSE
          </p> */}
          <TypewriterAnimation
            text=" UNIQUE FASHION DESIGN COURSE"
            className="inline-block px-3 py-px mb-4 text-2xl font-bold  text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-sky-600"
          />
          <h2 className="px-3 text-5xl font-black text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-sky-600">
            Online Education from Fashion Industry Leaders
          </h2>
          <p  className="mt-6 px-3 mb-8 text-2xl sm:mb-12 text-violet-800">
            Discover the business of fashion and the cultural impact of the
            fashion industry with courses from industry leaders.
          </p>
          <div className="flex flex-col px-3 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-2 font-bold text-cyan-50 border-md rounded-md bg-pink-400  bg-gradient-to-r from-pink-500 to-sky-300"
            >
              Enrolled Now
            </a>
          </div>
        </div>
        <div className="flex items-end gap-8 justify-center text-4xl p-6 mt-8 ">
          <button className="text-blue-800">
            <FaFacebook></FaFacebook>
          </button>
          <button className="text-pink-800">
            <FaInstagram></FaInstagram>
          </button>
          <button className="text-sky-600">
            <FaTwitter></FaTwitter>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
