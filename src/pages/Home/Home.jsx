import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Wrapper from "../../components/Wrapper/Wrapper";
import useFetch from "../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner/Banner";
import Classes from "./Classes/Classes";

const Home = () => {
  useTitle("Home");
  const getClasses = useFetch("http://localhost:5000/course");
  console.log(getClasses);
  const { data, loading } = getClasses;
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  const classesItems = data.slice(0, 6);
  console.log(classesItems);

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
            <div className="grid grid-cols-12 lg:grid-cols-3">
              {classesItems?.map((classesItem) => (
                <Classes
                  key={classesItem?._id}
                  img={classesItem?.image}
                  title={classesItem?.name}
                  seats={classesItem?.available_seats}
                  instructor={classesItem?.instructor_name}
                  price={classesItem?.price}
                />
              ))}
            </div>
            <Link to="/classes">
            <div className="flex items-center">
              <button className="btn btn-active btn-accent">SEE ALL CLASSES</button>
            </div>
            </Link>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default Home;
