import AboutUsCard from "../components/AboutUsCard";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";

function AboutUs() {
  return (
    <section id="about-us" className="flex flex-col gap-20 p-20">
      <SectionTitle title="About us" subtitle="Why we are best" />
      <div className="flex gap-10">
        <div className="w-1/2 flex gap-4">
          <div className="flex flex-col gap-4 w-1/2">
            <img
              src="/about-us/talking-people-sitting-beside-table.avif"
              alt="talking people sitting beside table"
              className="object-cover object-center flex-1 grayscale"
            />
            <img
              src="/about-us/people-on-conference-table-looking-at-talking-woman.avif"
              alt="people on conference table looking at talking woman"
              className="h-40 object-cover grayscale"
            />
          </div>
          <img
            className="w-1/2 object-cover grayscale"
            src="/about-us/group-of-people-sitting-beside-rectangular.avif"
            alt="group of people sitting beside rectangular wooden table with laptops"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-8 items-start">
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel
            tortor dui adipiscing. Bibendum cras fringilla amet suspendisse.
            Duis mattis hac urna fames in ante.
          </p>
          <AboutUsCard
            title="Our Vision"
            img="Eye.svg"
            description="Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget at. Id et at dui arcu risus."
          />
          <AboutUsCard
            title="Our Mission"
            img="Target.svg"
            description="Lorem ipsum dolor sit amet consectetur. Quam arcu habitasse fusce pharetra."
          />
          <Button>Read More</Button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
