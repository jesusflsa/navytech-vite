import Arrow from "./arrow.tsx";

interface ServiceCardProps {
  service: {
    image: string;
    title: string;
    description: string;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const background = index % 2 ? "" : "bg-[#F0F5FF]";
  return (
    <div
      className={`flex flex-col items-center justify-center ${background} gap-6 px-6 py-10 text-center`}
    >
      <img src={service.image} alt={service.title} />
      <h3 className="text-2xl font-semibold">{service.title}</h3>
      <p className="leading-snug">{service.description}</p>
      <a className="text-link flex items-center gap-1 px-4 py-2" href="#">
        <span>View details</span> <Arrow />
      </a>
    </div>
  );
}
