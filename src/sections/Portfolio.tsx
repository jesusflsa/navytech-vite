import portfolioImages from "../const/portfolio-images";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-primary text-primary flex flex-col items-center p-20 gap-20"
    >
      <div className="text-center">
        <p className="font-light text-lg">Portfolio</p>
        <h2 className="text-4xl">Our previous works</h2>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {portfolioImages.map((image) => (
          <div className="overflow-hidden select-none">
            <img
              className="aspect-square object-cover object-center w-full h-full filter grayscale hover:grayscale-0 transition-all"
              src={`/portfolio/${image.image}`}
              title={`Imagen de ${image.name}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
