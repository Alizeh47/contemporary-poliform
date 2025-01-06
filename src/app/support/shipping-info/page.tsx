export default function ShippingInfoPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-[#2C2825] mb-4">Shipping Information</h1>
          <p className="text-lg text-[#6B635C] max-w-2xl mx-auto">
            Learn about our delivery services and shipping policies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-[#D4C4B5] p-8">
            <div className="w-12 h-12 bg-[#8B7355] rounded-full flex items-center justify-center mb-4">
              <span className="text-[#F8F7F4]">✓</span>
            </div>
            <h3 className="text-xl font-medium text-[#2C2825] mb-2">White Glove Delivery</h3>
            <p className="text-[#6B635C]">Professional delivery and installation service included</p>
          </div>

          <div className="bg-white border border-[#D4C4B5] p-8">
            <div className="w-12 h-12 bg-[#8B7355] rounded-full flex items-center justify-center mb-4">
              <span className="text-[#F8F7F4]">✓</span>
            </div>
            <h3 className="text-xl font-medium text-[#2C2825] mb-2">Global Shipping</h3>
            <p className="text-[#6B635C]">International delivery available to select countries</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-[#D4C4B5] p-8">
          <h2 className="text-2xl font-light text-[#2C2825] mb-6">Shipping Details</h2>
          <div className="space-y-6">
            <div className="pb-6 border-b border-[#D4C4B5]">
              <h3 className="text-xl font-medium text-[#2C2825] mb-2">Delivery Timeline</h3>
              <p className="text-[#6B635C]">Standard delivery: 8-12 weeks for custom pieces</p>
            </div>
            <div className="pb-6 border-b border-[#D4C4B5]">
              <h3 className="text-xl font-medium text-[#2C2825] mb-2">Shipping Costs</h3>
              <p className="text-[#6B635C]">Calculated based on delivery location and item size</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
