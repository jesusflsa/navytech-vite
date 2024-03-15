import sponsors from "../const/sponsors";

function Sponsors() {
  return (
    <section className="bg-secondary text-primary flex justify-between items-center py-10 px-20">
      <div>
        <span className="font-light ">Trusted by</span>
        <p className="text-3xl">Top Companies</p>
      </div>
      <div className="flex">
        {sponsors.map((sponsor) => (
          <a href={sponsor.link} title={`Visita la pagina de ${sponsor.name}`}>
            <img
              src={`/sponsors/${sponsor.logo}`}
              alt={`Logo de ${sponsor.name}`}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Sponsors;
