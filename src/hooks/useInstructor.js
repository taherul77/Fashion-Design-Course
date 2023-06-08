
import { useQuery } from "@tanstack/react-query"

const useInstructor = ()=>{
  

    const { isLoading,refetch, data:course } = useQuery ({
      queryKey: ['course',],
      queryFn: async () => {
        const response = await fetch('http://localhost:5000/course')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      },
    })
    return {course,isLoading ,refetch}
  
  }
  export default useInstructor;