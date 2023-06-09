import { AiOutlineDelete } from "react-icons/ai";

import useFetch from "../../../hooks/useFetch";
import { BASE_URL } from "../../../hooks/global";
import Swal from "sweetalert2";

const ManageUser = () => {
  const users = useFetch(`${BASE_URL}/users`);

  const { data } = users;

  const user = data;
  

  const handleMakeAdmin = user =>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount) {
            
            Swal.fire({
                position:'center',
                icon:'success',
                title:`${user.name} is an admin Now`,
                showConfirmButton:false,
                timer:1500
            })
        }
    })

  }

  return (
    <div className="w-full max-auto">
      <section className="container mt-10 px-4 mx-auto">
        <div className="flex  flex-evenly  items-center gap-10"></div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-auto">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border  md:rounded-lg">
                <table className="min-w-full divide-y ">
                  <thead className=" bg-sky-500">
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
                          <span>NAME</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className=" py-3.5 text-sm font-normal text-center   "
                      >
                        <button className="flex w-full items-center pl-5 md:pl-0 lg:justify-center gap-x-2">
                          <p>EMAIL</p>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center  "
                      >
                        <button className="flex items-center gap-x-2">
                          <span>ROLE</span>
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
                    {user.map((user, index) => (
                      <tr key={user?._id}>
                        <td className="px-4 py-4 text-sm text-center whitespace-nowrap">
                          <span>{index + 1}</span>
                        </td>
                        <td className="px-4 py-4 hidden lg:block text-sm font-medium  whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              {user?.displayName}
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm pl-5 md:pl-0 lg:text-center whitespace-nowrap">
                          {user?.email}
                        </td>
                        <td className="flex  px-4 py-4 text-sm pl-5 md:pl-0 gap-5 lg:text-center whitespace-nowrap">
                          {user.role === "admin" ? (
                            "admin"
                          ) : (
                            <button
                              onClick={() => handleMakeAdmin(user)}
                              className="btn-sm text-xl rounded-md text-white bg-sky-500 "
                            >
                              Make Admin
                            </button>
                          )}
                          <button className="btn-sm text-xl rounded-md text-white pl-4 bg-sky-500 ">
                            Make Instructor
                          </button>
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button className="btn-sm text-xl text-white bg-red-600 transition-colors duration-200 hover:text-black focus:outline-none">
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

export default ManageUser;
