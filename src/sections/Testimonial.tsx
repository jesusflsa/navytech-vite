import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import testimonial from "../const/testimonial";

function Testimonial() {
  return (
    <section className="p-20 flex flex-col bg-[#F0F5FF] gap-20">
      <SectionTitle title="Testimonial" subtitle="What our clients say" />
      <div className="flex items-center justify-center gap-8">
        {testimonial.map((testimonial, index) => (
          <TestimonialCard
            key={`Testimonio numero ${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
