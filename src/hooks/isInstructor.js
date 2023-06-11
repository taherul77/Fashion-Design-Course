import { useEffect, useState } from "react";
import { BASE_URL } from "./global";

const useInstructorDashboard = (email) => {
  const [isInstructor, setIsInstructor] = useState(false);
  const [isInstructorLoading, setIsInstructorLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`${BASE_URL}/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
         

          if (data?.role === "instructor") {
            setIsInstructor(true);
            setIsInstructorLoading(false);
          }

          return;
        });
    }
  }, [email]);
  return [isInstructor, isInstructorLoading];
};

export default useInstructorDashboard;
