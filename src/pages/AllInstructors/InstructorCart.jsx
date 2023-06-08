/* eslint-disable react/prop-types */
const InstructorCart = ({img,instructor,price,taken}) => {
  return (
    <div>
    <div>
<div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg ">
  <div className="px-4 py-2">
    <h1 className="text-xl font-bold uppercase ">{instructor}</h1>
  
  </div>

  <img
    className="object-cover w-full h-50 mt-2"
    src={img}
    alt="NIKE AIR"
  />
  <p>Class Taken : {taken}</p>

  <div className="flex items-center justify-between px-4 py-2 ">
    <h1 className="text-lg font-bold ">${price}</h1>
  
    <button className="px-2 py-1 text-xs font-semibold uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
      See Classes
    </button>
  </div>
</div>

</div>

</div>
  );
};

export default InstructorCart;
