interface SectionTitleProps {
  title: string;
  subtitle: string;
}
function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <p className="font-light text-lg">{title}</p>
      <h2 className="text-4xl font-semibold">{subtitle}</h2>
    </div>
  );
}

export default SectionTitle;
