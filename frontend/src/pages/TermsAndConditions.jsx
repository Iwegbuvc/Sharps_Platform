const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 text-black px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Terms and Conditions
          </p>
          <h1 className="text-4xl font-extrabold">Welcome to SHAPRS</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            These Terms and Conditions govern your use of our website and
            services. By placing an order with SHAPRS, you agree to the terms
            described here.
          </p>
        </div>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Orders</h2>
            <p className="text-gray-700 leading-relaxed">
              All orders are subject to product availability. Once you place an
              order, we will confirm receipt via email and begin preparing your
              shipment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Pricing and Payment</h2>
            <p className="text-gray-700 leading-relaxed">
              Prices are displayed in Nigerian Naira and include applicable
              taxes. Payment is processed securely through Paystack. You are
              responsible for providing valid payment information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Shipping</h2>
            <p className="text-gray-700 leading-relaxed">
              Shipments are processed within 1–2 business days. Delivery
              timelines and shipping fees are outlined in our Shipping Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Returns and Refunds</h2>
            <p className="text-gray-700 leading-relaxed">
              We offer returns and refunds in line with the Refund Policy. Items
              must be returned in original condition within the stated window.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
