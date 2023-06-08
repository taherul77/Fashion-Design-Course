/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useInstructor from "../../../hooks/useInstructor";
import { BASE_URL } from "../../../hooks/global";

const Classes = ({ img, _id, title, seats, instructor, price }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
   const {refetch} = useInstructor();

  const handleAddToCart = () => {
    if (user && user.email) {
      const courseItem = {
        courseId: _id,
        title,
        img,
        price,
        seats,
        instructor,
        email: user.email,
      };
      fetch(`${BASE_URL}/course-cart`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(courseItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.insertedId);
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "items-center",
              icon: "success",
              title: " add ok ",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
            <button
              onClick={() => handleAddToCart()}
              className="px-2 py-1 text-xs font-semibold uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Classes;
