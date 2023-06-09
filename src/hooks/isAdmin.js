import { useQuery } from "@tanstack/react-query";


import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { BASE_URL } from "./global";

const useAdmin = () => {
    const {user} = useContext(AuthContext);
   
    
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`${BASE_URL}/users/admin/${user?.email}`)
            
            
            return res.json()
        }
    })
    return {isAdmin, isAdminLoading}
}
export default useAdmin;