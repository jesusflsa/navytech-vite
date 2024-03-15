import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import services from "../const/services";

function Services() {
  return (
    <section id="services" className="flex flex-col gap-20 p-20">
      <SectionTitle title="Our Services" subtitle="Growth based services" />
      <div className="flex">
        {services.map((service, index) => (
          <ServiceCard service={service} index={index} key={service.title} />
        ))}
      </div>
    </section>
  );
}

export default Services;
