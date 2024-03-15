interface HeroCardProps {
  title: string;
  description: string;
}

export default function HeroCard({ title, description }: HeroCardProps) {
  return (
    <div
      style={{
        border: "1px solid",
        borderImage:
          "linear-gradient(to right, transparent, rgba(255,255,255), transparent) 1",
      }}
      className="flex flex-col justify-between items-center gap-2 px-10 py-4 bg-white bg-opacity-10 rounded-xl"
    >
      <h3 className="text-primary text-4xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
