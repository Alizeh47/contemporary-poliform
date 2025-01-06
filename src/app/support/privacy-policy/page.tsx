export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-[#2C2825] mb-4">Privacy Policy</h1>
          <p className="text-lg text-[#6B635C] max-w-2xl mx-auto">
            How we collect, use, and protect your information
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-[#D4C4B5] p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-light text-[#2C2825] mb-4">Information We Collect</h2>
            <p className="text-[#6B635C] leading-relaxed mb-4">
              We collect information that you provide directly to us, including when you make a purchase,
              create an account, or contact us for support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-[#2C2825] mb-4">How We Use Your Information</h2>
            <ul className="text-[#6B635C] leading-relaxed space-y-3">
              <li className="flex items-start">
                <span className="text-[#8B7355] mr-2">•</span>
                To process and fulfill your orders
              </li>
              <li className="flex items-start">
                <span className="text-[#8B7355] mr-2">•</span>
                To communicate with you about products and services
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
