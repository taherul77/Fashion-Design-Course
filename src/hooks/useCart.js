import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useCart = () => {
    const { user ,loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch,  data: cart} = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/course-cart?email=${user?.email}`
            )
            return res.data;
            
        },
        
      })
     
   return {cart, refetch}
};

export default useCart;