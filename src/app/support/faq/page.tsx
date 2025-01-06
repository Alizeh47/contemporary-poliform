export default function FAQPage() {
  const faqs = [
    {
      question: "What is your delivery timeframe?",
      answer: "Our standard delivery timeframe is 8-12 weeks for custom pieces. Each item is handcrafted to order in our Italian workshops."
    },
    {
      question: "Do you offer assembly services?",
      answer: "Yes, we provide white-glove delivery and assembly service for all our furniture pieces, ensuring professional installation."
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-[#2C2825] mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-[#6B635C] max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6 bg-white border border-[#D4C4B5] p-6">
              <h3 className="text-xl font-medium text-[#2C2825] mb-3">{faq.question}</h3>
              <p className="text-[#6B635C] leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
