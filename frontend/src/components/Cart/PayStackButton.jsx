const PayStackButton = ({ amount, email, onSuccess, onClose }) => {
  const handlePayment = () => {
    // 🔒 Lock background scroll
    document.body.style.overflow = "hidden";

    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email,
      amount: amount * 100,
      currency: "NGN",
      ref: `${Date.now()}`,
      callback: function (response) {
        document.body.style.overflow = "";
        onSuccess(response);
      },
      onClose: function () {
        document.body.style.overflow = "";
        onClose && onClose();
      },
    });

    handler.openIframe();
  };

  return (
    <button
      onClick={handlePayment}
      className="
        w-full
        cursor-pointer
        bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)]
        text-white
        px-4 py-3
        rounded-lg
        font-semibold
        hover:opacity-90
        transition-opacity
      "
    >
      Pay Now
    </button>
  );
};

export default PayStackButton;
