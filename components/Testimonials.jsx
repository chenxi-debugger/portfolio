export default function Testimonials() {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <TestimonialCard
            name="Daniel Lewis"
            text="Richard was hired to create a corporate identity. We were very pleased with the work done."
            avatar="https://i.pravatar.cc/100?img=12"
          />
          <TestimonialCard
            name="Jessica Miller"
            text="Richard was hired to create a corporate identity. We were very pleased with the work done."
            avatar="https://i.pravatar.cc/100?img=65"
          />
        </div>
      </div>
    )
  }
  
  function TestimonialCard({ name, text, avatar }) {
    return (
      <div className="bg-[#1f2937] text-white rounded-lg p-5 flex items-start space-x-6 shadow">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-lg text-gray-300">{text}</p>
        </div>
      </div>
    )
  }
  