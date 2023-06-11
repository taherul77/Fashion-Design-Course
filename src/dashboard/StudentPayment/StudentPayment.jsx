import { useParams } from "react-router-dom";

const StudentPayment = () => {
  const {tran_id} = useParams();
  return (
    <div>
     Payment Success {tran_id}
    </div>
  );
};

export default StudentPayment;
