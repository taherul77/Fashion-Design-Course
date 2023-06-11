import { useEffect, useState } from "react";
import { BASE_URL } from "./global";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`${BASE_URL}/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          

          if (data?.role === "admin") {
            setIsAdmin(true);
            setIsAdminLoading(false);
          }

          return;
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
