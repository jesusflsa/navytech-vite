import ReviewStars from "./ReviewStars";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    score: number;
    comment: string;
    image: string;
  };
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="w-full flex-col flex items-center bg-white py-6 px-10 gap-5 max-w-[650px] rounded-2xl">
      <img className="w-16 h-16" src="/testimonial/Quotes.svg" alt="Quotes" />
      <p className="text-xl">{testimonial.comment}</p>
      <div className="flex items-center gap-4">
        <img
          className="w-[100px] h-[100px] object-cover object-center rounded-full"
          src={`/testimonial/${testimonial.image}`}
          alt=""
        />
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-semibold">{testimonial.name}</h4>
          <ReviewStars score={testimonial.score} />
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;
