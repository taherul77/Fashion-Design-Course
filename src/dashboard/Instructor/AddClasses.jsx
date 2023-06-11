import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Wrapper from "../../components/Wrapper/Wrapper";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClasses = () => {
  const { user } = useContext(AuthContext);
  console.log("====================================");
  console.log(user);
  console.log("====================================");
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { courseName, price, duration, available_seats ,description } = data;
   
          const newCourse = {
            name: courseName,
            description,
            price: parseFloat(price),
            duration,
            available_seats,
            image: imgURL,
            instructor: {
              name: user?.displayName,
              email: user?.email,
              image: user.photoURL,
              course_name: courseName,
              course_taken: 1,
            },
          };
          console.log(newCourse);
          axiosSecure.post("/course", newCourse).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Course added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full ">
      <Wrapper>
        <SectionTitle
          SubHeading="What's New"
          heading="Add Course"
        ></SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Name*</span>
              </label>
              <input
                type="text"
                placeholder="Course Name"
                {...register("courseName", { required: true, maxLength: 120 })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Price*</span>
              </label>
              <input
                type="number"
                placeholder="Course Price"
                {...register("price", { required: true, maxLength: 20 })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Seats*</span>
              </label>
              <input
                type="number"
                placeholder="Available Seats"
                {...register("available_seats", {
                  required: true,
                  maxLength: 20,
                })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor name*</span>
              </label>
              <input
                readOnly
                type="text"
                placeholder="Instructor name"
                defaultValue={user?.displayName}
                {...register("name", { required: false, maxLength: 20 })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Email*</span>
              </label>
              <input
                readOnly
                type="Email"
                placeholder="Instructor Email"
                defaultValue={user?.email}
                {...register("name", { required: false, maxLength: 20 })}
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Duration*</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                {...register("duration", { required: true })}
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Description*</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                {...register("description", { required: true })}
                placeholder="Description"
              ></textarea>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Pick a Class Image*</span>
              </label>
              <input
                {...register("image", { required: false })}
                type="file"
                className="file-input file-input-bordered w-full  mb-5"
              />
            </div>

            <input
              type="submit"
              className="btn bg-sky-500 "
              value="Add Course"
            />
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default AddClasses;
