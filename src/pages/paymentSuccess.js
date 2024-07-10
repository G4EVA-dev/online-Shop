import React from "react";
import Confetti from "react-confetti";
import { ReactComponent as TickIcon } from "../assets/images/tick.svg"; // Ensure you have a tick SVG

const PaymentSuccess = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-white">
      <Confetti />
      <TickIcon className="w-[156px] h-[156px] mb-4" />
      <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
      <p className="text-lg">Thank you for your purchase. Your transaction is complete.</p>
    </div>
  );
};

export default PaymentSuccess;
