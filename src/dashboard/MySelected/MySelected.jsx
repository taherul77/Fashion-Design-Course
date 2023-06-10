
import { AiOutlineArrowLeft, AiOutlineDelete } from "react-icons/ai";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import Swal from "sweetalert2";

const MySelected = () => {
  const { course, refetch } = useCart();
  console.log(course);
  const total = course?.reduce((sum, item) => item.price + sum, 0);

  
  const handleDelete = (id) =>{
    
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/course/delete/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
            })



        
        }
      })
  }

  return (
    <div className="w-full max-auto">
      <Wrapper className="pt-14 md:pt-20 space-y-14 w-[100%] lg:space-y-20">
        {!course || course?.length === 0 ? (
          <div className="h-[calc(100vh-10rem)] flex justify-center items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-center leading-10 uppercase">
                No item available
              </h1>
              <Link
                to={"/shop"}
                className="flex items-center justify-center gap-2 mt-5 lg:mt-10 cursor-pointer"
              >
                <button
                  className={"rounded-sm bg-neutral md:text-xl uppercase"}
                >
                  Order some food
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="lg:flex lg:gap-x-4">
            <table className="table">
              
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
               

                {course?.map((course,index) => (
                  <tr key={course._id}>
                    <th>
                      <label>
                        {index + 1}
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={course.img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Zemlak, Daniel and Leannon</td>
                    <td>Purple</td>
                    <th>
                      <button onClick={()=>handleDelete(course?._id)} className="btn btn-ghost text-2xl btn-xs">
                        <AiOutlineDelete></AiOutlineDelete>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="lg:w-4/12 w-full bg-[#F3F3F3] sticky top-20">
              <div className="flex flex-col p-10 lg:pt-20 justify-between ">
                <div className="font-semibold">
                  <p className="text-2xl md:text-3xl font-black text-center text-neutral">
                    Order Summary
                  </p>
                  
                </div>

                <div className="mt-10 md:mt-14 lg:mt-0">
                  
                  <div className="flex items-center pb-6 justify-between ">
                    <p className="text-2xl leading-normal text-neutral">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-neutral">
                      {total}
                    </p>
                  </div>

                  <button className={"w-full rounded-sm bg-neutral md:text-xl"}>
                    PROCEED TO CHECKOUT
                  </button>
                  <Link
                    to={"/shop"}
                    className="flex items-center gap-2 mt-5 cursor-pointer"
                  >
                    <AiOutlineArrowLeft className="text-xl mt-1" />
                    <p className="md:text-xl text-neutral">Back to shop</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        
      </Wrapper>
    </div>
  );
};

export default MySelected;
