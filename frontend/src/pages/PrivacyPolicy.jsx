const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 text-black px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Privacy Policy
          </p>
          <h1 className="text-4xl font-extrabold">Your Privacy Matters</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            SHAPRS collects only the information needed to process orders, ship
            products, and improve your shopping experience.
          </p>
        </div>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              When you create an account or place an order, we collect your name,
              email address, shipping address, and payment details. Payment
              data is processed securely through Paystack and is not stored on
              our servers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
            <p className="text-gray-700 leading-relaxed">
              We use your information to fulfill orders, communicate shipping
              updates, and provide customer support. We may also send promotional
              emails if you opt in.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We maintain industry-standard security practices to protect your
              data. Access is restricted to authorized personnel only.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              You may access, update, or request deletion of your personal data
              by contacting our support team at support@shaprs.com.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
