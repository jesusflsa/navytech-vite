import { ArrowRight } from "./arrow";

interface ButtonProps {
  children: string;
}

function Button({ children }: ButtonProps) {
  return (
    <button className="bg-secondary text-primary flex gap-6 items-center justify-center py-6 px-12 rounded-2xl min-w-[320px]">
      <span className="text-2xl">{children}</span>
      <ArrowRight />
    </button>
  );
}

export default Button;
