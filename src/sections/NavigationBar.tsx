function NavigationBar() {
  return (
    <header className="py-6 px-20 w-full bg-primary flex justify-between items-center text-primary text-lg">
      <img src="/Logo.svg" className="h-full" />
      <nav className=" gap-10 flex">
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about-us">About Us</a>
        <a href="#testimonial">Testimonial</a>
        <img
          className="inline w-6 h-6"
          src="/search.svg"
          alt="Botón para Buscar"
        />
      </nav>
      <button className="flex gap-2 px-8 py-3 border rounded-lg items-center">
        <img src="/phone.svg" alt="Icono de telefono" />
        <p>Talk to us</p>
      </button>
    </header>
  );
}

export default NavigationBar;
