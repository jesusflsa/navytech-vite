interface IconProps {
  name: string;
}

export default function Icon({ name }: IconProps) {
  return (
    <img
      src={`/footer/${name}.svg`}
      className="w-12 h-12 opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out"
      alt={`Icono de ${name}`}
    />
  );
}
