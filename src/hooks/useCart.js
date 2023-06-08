import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./global";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useCart = () => {
    const {user} = useContext(AuthContext);
    const { refetch, data:course } = useQuery ({
        queryKey: ['course',],
        queryFn: async () => {
          const response = await fetch(`${BASE_URL}/course-cart?email=${user?.email}`)
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        },
      })


    return {course,refetch}
};

export default useCart;