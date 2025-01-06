export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-[#2C2825] mb-4">Terms of Service</h1>
          <p className="text-lg text-[#6B635C] max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-[#D4C4B5] p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-light text-[#2C2825] mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#6B635C] leading-relaxed mb-4">
              By accessing and using Poliform's services, you agree to be bound by these Terms of Service
              and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-[#2C2825] mb-4">2. Product Orders</h2>
            <p className="text-[#6B635C] leading-relaxed mb-4">
              All orders are subject to availability and confirmation of the order price. Custom orders
              may require additional lead time and are non-refundable.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
