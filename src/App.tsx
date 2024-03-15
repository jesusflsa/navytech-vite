import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import NavigationBar from "./sections/NavigationBar";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Sponsors from "./sections/Sponsors";

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
      </main>
    </>
  );
}

export default App;
