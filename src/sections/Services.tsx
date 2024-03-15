import ServiceCard from "../components/ServiceCard";
import services from "../const/services";

function Services() {
  return (
    <section id="services" className="flex flex-col gap-20 p-20">
      <div className="text-center">
        <p className="font-light text-lg">Our Services</p>
        <h2 className="text-4xl">Growth based services</h2>
      </div>
      <div className="flex">
        {services.map((service, index) => (
          <ServiceCard  service={service} index={index} key={service.title} />
        ))}
      </div>
    </section>
  );
}

export default Services;
