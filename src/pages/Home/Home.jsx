import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Wrapper from "../../components/Wrapper/Wrapper";
import useFetch from "../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner/Banner";
import Classes from "./Classes/Classes";

import Instructors from "./Instructors/Instructors";
import { BASE_URL } from "../../hooks/global";

const Home = () => {
  useTitle("Home");
  const getClasses = useFetch(`${BASE_URL}/course`);

  const { data, loading } = getClasses;

  const classesItems = data?.slice(0, 6);

  return (
    <div>
      <Banner></Banner>
      <Wrapper>
        <SectionTitle
          SubHeading={"MOST LOVED"}
          heading={"Classes"}
        ></SectionTitle>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-12 gap-5 gap-y-10 ">
              {classesItems?.map((classesItem) => (
                <Classes
                  key={classesItem?._id}
                  img={classesItem?.image}
                  title={classesItem?.name}
                  seats={classesItem?.available_seats}
                  instructor={classesItem?.instructor?.name}
                  price={classesItem?.price}
                />
              ))}
            </div>
            <Link to="/classes">
              <div className="flex items-center pt-10 justify-center">
                <button className="btn btn-active btn-accent">
                  SEE ALL CLASSES
                </button>
              </div>
            </Link>
          </>
        )}
      </Wrapper>
      <Wrapper>
        <SectionTitle
          SubHeading={"MOST LOVED"}
          heading={"Instructors"}
        ></SectionTitle>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-12 gap-5">
              {classesItems?.map((instructorItem) => (
                <Instructors
                  key={instructorItem?._id}
                  img={instructorItem?.instructor?.image}
                  instructor={instructorItem?.instructor?.name}
                  email={instructorItem?.instructor?.email}
                  taken={instructorItem?.instructor?.course_taken}
                />
              ))}
            </div>
            <Link to="/instructors">
              <div className="flex items-center pt-10 justify-center">
                <button className="btn btn-active btn-accent">
                  SEE ALL INSTRUCTORS
                </button>
              </div>
            </Link>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default Home;
