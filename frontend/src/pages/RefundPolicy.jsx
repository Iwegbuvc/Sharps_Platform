const RefundPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 text-black px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Refund Policy
          </p>
          <h1 className="text-4xl font-extrabold">Easy returns and refunds</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            If you are not fully satisfied with your SHAPRS purchase, we offer a
            straightforward refund experience.
          </p>
        </div>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Return Window</h2>
            <p className="text-gray-700 leading-relaxed">
              You may request a return within 7 days of delivery for unworn,
              unused, and unwashed items in their original packaging.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">How to Request a Return</h2>
            <p className="text-gray-700 leading-relaxed">
              Contact support@shaprs.com with your order number and reason for
              return. Our team will provide instructions for returning the item.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Refund Timing</h2>
            <p className="text-gray-700 leading-relaxed">
              Refunds are processed within 5–10 business days after we receive
              and inspect the returned item. Refunds are issued to the original
              payment method.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Exceptions</h2>
            <p className="text-gray-700 leading-relaxed">
              Sale items, custom pieces, and final clearance products may not be
              eligible for refunds. We will always make any eligibility clear at
              checkout.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
