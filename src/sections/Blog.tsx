import BlogCard from "../components/BlogCard";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import blog from "../const/blog";

function Blog() {
  return (
    <section className="p-20 flex flex-col gap-20 items-center">
      <SectionTitle title="Blog" subtitle="Browse articles" />
      <div className="flex p-4 gap-6 justify-center">
        {blog.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
      <Button>Read More</Button>
    </section>
  );
}

export default Blog;
