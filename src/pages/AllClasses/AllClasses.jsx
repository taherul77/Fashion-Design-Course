import TopBanner from "../../components/TopBanner/TopBanner";
import useFetch from "../../hooks/useFetch";

import Loader from "../../components/Loader/Loader";
import Wrapper from "../../components/Wrapper/Wrapper";

import Classes from "../Home/Classes/Classes";

const AllClasses = () => {
  const getClasses = useFetch("http://localhost:5000/course");

  const { data, loading } = getClasses;

  const classesItems = data;

  return (
    <div>
      <TopBanner
        img="https://i.ibb.co/TcKpk1X/pngtree-fashion-blue-banner-banners-design-vector-material-picture-image-1185823.png"
        title={"OUR CLASSES"}
      />
      <Wrapper>
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
                  instructor={classesItem?.instructor?.name}
                  price={classesItem?.price}
                />
              ))}
            </div>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default AllClasses;
