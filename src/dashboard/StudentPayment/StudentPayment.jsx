import { useParams } from "react-router-dom";

const StudentPayment = () => {
  const {tran_id} = useParams();
  console.log('====================================');
  console.log({tran_id});
  console.log('====================================');
  return (
    <div>
     Payment Success {tran_id}
    </div>
  );
};

export default StudentPayment;
