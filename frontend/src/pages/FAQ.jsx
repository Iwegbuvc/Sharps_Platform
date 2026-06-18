const FAQ = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 text-black px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            FAQs
          </p>
          <h1 className="text-4xl font-extrabold">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Find quick answers about shipping, returns, payments, and order
            support.
          </p>
        </div>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">
              How long does shipping take?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Orders are dispatched within 1–2 business days. Delivery typically
              takes 3–7 business days depending on your location.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Can I return an item?</h2>
            <p className="text-gray-700 leading-relaxed">
              Yes. We accept returns within 7 days of delivery for items that
              are unused and in original condition. See our Refund Policy for
              full details.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              What payment methods do you accept?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We accept payments through Paystack. You can pay with card or
              other supported local payment options.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              How can I track my order?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tracking information is provided once your order ships. Check your
              email or contact support for updates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Who can I contact for support?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Email sharpscollection.online@gmail.com or call +234 8142853360
              for order help.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
