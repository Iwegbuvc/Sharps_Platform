const PayStackButton = ({ amount, email, onSuccess, onClose }) => {
  const handlePayment = () => {
    // ✅ TEMP: confirm env variable is loading
    console.log(
      "Paystack Public Key:",
      import.meta.env.VITE_PAYSTACK_PUBLIC_KEY
    );

    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY, // ✅ HERE
      email,
      amount: amount * 100, // Paystack expects kobo
      currency: "NGN",
      ref: `${Date.now()}`,
      callback: function (response) {
        onSuccess(response);
      },
      onClose: function () {
        onClose && onClose();
      },
    });

    handler.openIframe();
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold"
    >
      Pay Now
    </button>
  );
};

export default PayStackButton;
