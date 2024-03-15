import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import NavigationBar from "./sections/NavigationBar";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Sponsors from "./sections/Sponsors";
import Testimonial from "./sections/Testimonial";

function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <Hero />
        <Sponsors />
        <Services />
        <Portfolio />
        <AboutUs />
        <Testimonial />
      </main>
    </>
  );
}

export default App;
