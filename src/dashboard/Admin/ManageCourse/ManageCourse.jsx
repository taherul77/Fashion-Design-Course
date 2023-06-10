import { AiOutlineDelete, AiOutlineCreditCard } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCourse from "../../../hooks/useCourse";


const ManageCourse = () => {
  const {course, refetch} = useCourse();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/course/${item._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div className="w-full max-auto">
      <section className="container mt-10 px-4 mx-auto">
        <div className="flex  flex-evenly  items-center gap-10">
          <h2 className="lg:text-3xl text-center font-medium ">
            TOTAL ITEMS: {course?.length}
          </h2>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-auto">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border  md:rounded-lg">
                <table className="min-w-full divide-y ">
                  <thead className=" bg-[#D1A054]">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4  text-sm font-normal text-center  "
                      >
                        <div className="flex items-center gap-x-3"></div>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-center hidden lg:block "
                      >
                        <div className="flex w-full justify-center items-center gap-x-3">
                          <span>ITEM IMAGE</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className=" py-3.5 text-sm font-normal text-center   "
                      >
                        <button className="flex w-full items-center pl-5 md:pl-0 lg:justify-center gap-x-2">
                          <p>ITEM NAME</p>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center  "
                      >
                        <button className="flex items-center gap-x-2">
                          <span>PRICE</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center  "
                      >
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody className="lg:text-center">
                    {course.map((item, index) => (
                      <tr key={item.id}>
                        <td className="px-4 py-4 text-sm text-center whitespace-nowrap">
                          <span>{index + 1}</span>
                        </td>
                        <td className="px-4 py-4 hidden lg:block text-sm font-medium  whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-md"
                                src={item.image}
                                alt=""
                              />
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm pl-5 md:pl-0 lg:text-center whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="px-4 py-4 text-sm text-start whitespace-nowrap">
                          {item.price}
                        </td>

                        <td className="flex gap-5 px-4 py-4 text-sm whitespace-nowrap">
                          <button
                            onClick={() => handleDelete(item)}
                            className="btn-sm text-xl text-white bg-[#D1A054] transition-colors duration-200 hover:text-black focus:outline-none"
                          >
                            <AiOutlineCreditCard></AiOutlineCreditCard>
                          </button>
                          <button
                            onClick={() => handleDelete(item)}
                            className="btn-sm text-xl text-white bg-red-600 transition-colors duration-200 hover:text-black focus:outline-none"
                          >
                            <AiOutlineDelete></AiOutlineDelete>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageCourse;
