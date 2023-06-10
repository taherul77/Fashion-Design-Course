/* eslint-disable react/prop-types */

const Instructors = ({ img, instructor, email, taken }) => {
  return (
    <div className=" col-span-12 lg:col-span-4   rounded-lg shadow-lg ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructor}</h2>
          <p>Email : {email}</p>
          <p>Classes taken : {taken}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">See Classes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
