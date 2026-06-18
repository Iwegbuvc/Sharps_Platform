const ShippingPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 text-black px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Shipping Policy
          </p>
          <h1 className="text-4xl font-extrabold">Fast, simple shipping</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            SHAPRS ships nationwide with transparent fees and reliable delivery
            updates.
          </p>
        </div>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Processing Time</h2>
            <p className="text-gray-700 leading-relaxed">
              Orders are processed within 1–2 business days after payment
              confirmation. Once shipped, delivery usually takes 3–7 business
              days depending on your location.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Shipping Fees</h2>
            <p className="text-gray-700 leading-relaxed">
              Shipping fees vary by location and are shown at checkout. We aim to
              keep shipping affordable while ensuring quick handling and safe
              delivery.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              Once your order ships, you will receive a tracking number by email.
              Use it to follow your package until it arrives at your door.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Delivery Window</h2>
            <p className="text-gray-700 leading-relaxed">
              Delivery windows may expand during holidays and peak shipping
              periods. If there is an unexpected delay, our support team will keep
              you informed.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;
