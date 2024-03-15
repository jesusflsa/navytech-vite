interface AboutUsCardProps {
  img: string;
  title: string;
  description: string;
}

function AboutUsCard({ img, title, description }: AboutUsCardProps) {
  return (
    <div className="flex items-start gap-4">
      <img
        src={`/about-us/${img}`}
        alt={`Referencing ${title}`}
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AboutUsCard;
