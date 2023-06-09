import "./banner.css";

const Banner = () => {
  return (
    <section className="">
      <div className=" banner-bg container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="inline-block px-3 py-px mb-4 text-2xl font-bold  text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-sky-600">
            UNIQUE FASHION DESIGN COURSE
          </p>
          <h2 className="px-3 text-4xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-sky-600">
          Online Education from Fashion Industry Leaders
          </h2>
          <p className="mt-6 px-3 mb-8 text-lg sm:mb-12 text-white">
          Discover the business of fashion and the cultural impact of the fashion industry with courses from industry leaders.
            
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
        <div className="flex items-center justify-center p-6 mt-8 l">
          <img
            src="https://i.ibb.co/f92LtQB/95d06ef7f27544514b0b7176c06478e2.jpg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-50 "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
