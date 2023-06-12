import useTitle from "../../../hooks/useTitle";


const Contact = () => {
  useTitle("Home");
    return (
        <div>
            <section className="">
        <div className="container px-6 py-12 mx-auto">
       <div className="flex justify-center">
       <h2 className="text-4xl uppercase font-black">Contuct Us</h2>
       </div>
          <div className="lg:flex lg:items-center lg:-mx-6">
            
            <div className="lg:w-1/2 lg:ms-16 lg:mx-6">
              <h1 className="text-2xl font-semibold uppercase lg:text-3xl">
                Contact us for <br /> more info
              </h1>

              <div className="mt-2 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <span className="mx-2 truncate ">
                    Phultola,khulna,Bangladesh
                  </span>
                </p>

                <p className="flex items-start ">
                  <span className=" truncate ">01710000000</span>
                </p>

                <p className="flex items-start ">
                  <span className=" truncate ">taherul2317@gmail.com</span>
                </p>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden  rounded-lg shadow-2xl ">
                <h1 className="text-lg font-medium text-gray-700">
                  What do you want to ask
                </h1>

                <form className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm">Full Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-3 py-2 border rounded-md border-gray-700"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm">Email address</label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="w-full px-3 py-2 border rounded-md border-gray-700"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm">Message</label>
                    <textarea
                      className="w-full px-3 py-2 border rounded-md border-gray-700"
                      placeholder="Message"
                    ></textarea>
                  </div>
                           <div>
                      <button
                        className=" w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-fuchsia-900 focus:outline-none focus:ring focus:ring-fuchsia-300 focus:ring-opacity-50"
                       
                        size="medium"
                      >
                        Submit
                      </button>
                    </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
            
        </div>
    );
};

export default Contact;