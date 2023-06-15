import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");
  return (
    <div>
      <h1>Payment successful for reference number: {referenceNum}</h1>
    </div>
  );
};

export default PaymentSuccess;
