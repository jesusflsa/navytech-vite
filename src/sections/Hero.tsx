import HeroCard from "../components/HeroCard";

function Hero() {
  return (
    <section className="flex p-20 justify-between text-primary bg-primary items-center">
      <div className="gap-10 flex flex-col items-start max-w-[1000px]">
        <div className="flex flex-col gap-4 w-[670px]">
          <h1 className="text-6xl">#1 Worldwide Digital Solution Agency</h1>
          <p className="font-extralight text-lg">
            Revolutionize your global digital strategy with the #1 Worldwide
            Digital Solution Agency, pioneering innovative solutions for
            unparalleled success.
          </p>
        </div>
        <button className="flex gap-4 px-12 py-6 rounded-lg bg-secondary items-center">
          <img src="/phone.svg" alt="Icono de telefono" />
          <p className="text-2xl">Book a call</p>
        </button>
        <div className="flex gap-4 ">
          <HeroCard title="75K+" description="Project Completed" />
          <HeroCard title="20+" description="Years of Experience" />
          <HeroCard title="400K+" description="Clients Worldwide" />
        </div>
      </div>
      <img
        className="hero-image w-[516px]"
        src="/hero-image.webp"
        alt="Imagen de la consultora en operación"
      />
    </section>
  );
}

export default Hero;
