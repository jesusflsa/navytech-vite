import Arrow from "./arrow";

interface BlogCardProps {
  blog: {
    title: string;
    thumbnail: string;
    postedBy: string;
    date: string;
  };
}

function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="flex flex-col gap-4 p-4 items-center w-full">
      <img
        className="w-full object-cover aspect-square"
        src={`/blog/${blog.thumbnail}`}
        alt={`Image of ${blog.title}`}
      />
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <img src="/blog/User.svg" alt="Icono de usuario" />
          <span>{blog.postedBy}</span>
        </div>
        <div className="flex gap-2">
          <img src="/blog/CalendarBlank.svg" alt="Icono de calendario" />
          <span>
            {new Date(blog.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
      <h3 className="w-full text-2xl">{blog.title}</h3>
      <a className="text-link flex items-center gap-1 px-4 py-2" href="#">
        <span>View details</span> <Arrow />
      </a>
    </article>
  );
}

export default BlogCard;
