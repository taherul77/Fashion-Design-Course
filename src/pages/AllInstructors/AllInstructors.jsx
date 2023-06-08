import Loader from "../../components/Loader/Loader";
import TopBanner from "../../components/TopBanner/TopBanner";
import Wrapper from "../../components/Wrapper/Wrapper";

import useInstructor from "../../hooks/useInstructor";
import useTitle from "../../hooks/useTitle";
import InstructorCart from "./InstructorCart";

const AllInstructors = () => {
  useTitle("Home");

  const {course:instructor ,isLoading} = useInstructor();
  console.log('====================================');
  console.log(instructor);
  console.log('====================================');

  // const getClasses = useFetch("http://localhost:5000/course");

  // const { data, loading } = getClasses;

  // const classesItems = data;
    return (
        <div>
        <TopBanner
          img="https://i.ibb.co/TcKpk1X/pngtree-fashion-blue-banner-banners-design-vector-material-picture-image-1185823.png"
          title={"OUR INSTRUCTORS"}
        />
        <Wrapper>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div className="grid grid-cols-12 lg:grid-cols-3">
                {instructor?.map((instructorItem) => (
                  <InstructorCart
                  key={instructorItem?._id}
                  img={instructorItem?.instructor?.image}
                  instructor={instructorItem?.instructor?.name}
                  price={instructorItem?.price}
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