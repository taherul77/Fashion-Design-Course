import Loader from "../../components/Loader/Loader";
import TopBanner from "../../components/TopBanner/TopBanner";
import Wrapper from "../../components/Wrapper/Wrapper";

import useInstructor from "../../hooks/useInstructor";
import useTitle from "../../hooks/useTitle";
import Instructors from "../Home/Instructors/Instructors";
import img from '../../assets/top-banner.gif'


const AllInstructors = () => {
  useTitle("Home");

  const {course:instructor ,isLoading} = useInstructor();
 


    return (
        <div>
        <TopBanner
          img={img}
          title={"OUR INSTRUCTORS"}
        />
        <Wrapper className='py-20'>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div className="grid grid-cols-12 gap-10">
                {instructor?.map((instructorItem) => (
                  <Instructors
                  key={instructorItem?._id}
                  img={instructorItem?.instructor?.image}
                  instructor={instructorItem?.instructor?.name}
                  email={instructorItem?.instructor?.email}
                  taken={instructorItem?.instructor?.course_taken}
                  />
                ))}
              </div>
            </>
          )}
        </Wrapper>
      </div>
    );
};

export default AllInstructors;