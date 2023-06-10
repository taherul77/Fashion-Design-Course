/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


import { useRef, useState } from "react";

import './Classes.css'



import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BASE_URL } from "../../../hooks/global";
import useCart from "../../../hooks/useCart";

const Classes = ({ img, _id, title, seats, instructor, price }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { refetch } = useCart();

  const [isHovered, setIsHovered] = useState(false);
    const delayedIsHovered = useRef(false);
    const timeoutId = useRef(null);

    console.log(isHovered);

  const handleMouseOver = () => {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
        setIsHovered(true);
        delayedIsHovered.current = true;
    }, 200);
};

const handleMouseOut = () => {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
        setIsHovered(false);
        delayedIsHovered.current = false;
    }, 200);
};

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
   
        



        <div className="col-span-12 lg:col-span-4 bg-white ">
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="hover:shadow-md rounded-md cursor-pointer"
            >
                <img
                    className="border border-b-0 border-gray-400"
                    src={img}
                    alt=""
                />
                <div className="text-center pt-5 pb-12 space-y-3 border border-gray-200 relative">
                    <h2 className="text-2xl font-medium">{(title)?.slice(0,28)}...</h2>
                    <h3 className="text-xl font-medium">Instructor: {instructor}</h3>
                    <h2 className="text-lg font-medium">${price}</h2>
                    <h2>Available seats : {seats}</h2>
                    <div className="button-cart"></div>
                    <svg onClick={() => handleAddToCart()}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-12 h-12 absolute p-4 rounded-full bottom-[-20px] text-white bg-[#60cdd3] left-1/2 transform -translate-x-1/2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                </div>
            </div>
        </div>


       
    
    </>
  );
};

export default Classes;
