import Icon from "../components/FooterIcon";

function Footer() {
  function handleSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
  }
  return (
    <footer className="bg-[#000816] w-full p-20 text-primary flex justify-between">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <img className="w-20" src="/Logo.svg" alt="Logo de Navytech" />
          <h2 className="text-3xl font-semibold">Navytech</h2>
        </div>
        <div>
          <p className="text-xl">
            hello@navytech.com
            <br />
            Phone : +01 23456789
          </p>
        </div>
        <div className="flex gap-2">
          <Icon name="Facebook" />
          <Icon name="Twitter" />
          <Icon name="Instagram" />
          <Icon name="Linkedin" />
          <Icon name="Youtube" />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold">Quick Links</h3>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#services" className="text-xl font-light">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-xl font-light">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#about-us" className="text-xl font-light">
              About Us
            </a>
          </li>
          <li>
            <a href="#testimonial" className="text-xl font-light">
              Testimonial
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold">Resources</h3>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#services" className="text-xl font-light">
              Support
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-xl font-light">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#about-us" className="text-xl font-light">
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold">Subscribe</h3>
        <div className="flex p-2 pl-6 gap-10 bg-[rgba(255,255,255,0.1)] items-center rounded-2xl">
          <div className="flex gap-2">
            <img
              className="w-[30px] h-[30px]"
              src="/footer/EnvelopeSimple.svg"
              alt="Icono de Mail"
            />
            <input
              className="text-lg text-primary outline-none border-none bg-[#00000000]"
              placeholder="name@domain.com"
              type="text"
            />
          </div>
          <button className="text-lg bg-secondary px-16 py-4 rounded-lg" onSubmit={handleSubmit} type="submit">Send</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
