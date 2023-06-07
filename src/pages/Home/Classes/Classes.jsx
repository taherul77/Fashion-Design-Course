/* eslint-disable react/prop-types */

const Classes = ({ img, title, seats, instructor, price }) => {
  return (
    <>
      <div>
        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg ">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold uppercase ">{title}</h1>
            <p className="mt-1 text-sm ">Instructor: {instructor}</p>
          </div>

          <img
            className="object-cover w-full h-50 mt-2"
            src={img}
            alt="NIKE AIR"
          />

          <div className="flex items-center justify-between px-4 py-2 ">
            <h1 className="text-lg font-bold ">${price}</h1>
            <p>Seats: {seats}</p>
            <button className="px-2 py-1 text-xs font-semibold uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Add to cart
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Classes;
