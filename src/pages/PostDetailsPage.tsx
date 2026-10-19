import { useParams, Link } from "react-router";
import { initialPosts } from "../data/posts";

export const PostDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const post = initialPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div style={{ textAlign: "center", padding: "3rem 0" }}>
        <h2 style={{ color: "var(--accent-yellow)", marginBottom: "1rem" }}>
          Post Not Found
        </h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
          No post exists with id: {id}
        </p>
        <Link to="/posts" className="btn btn-primary">
          Back to Posts
        </Link>
      </div>
    );
  }

  return (
    <article
      style={{
        background: "var(--bg-surface)",
        padding: "2.5rem",
        borderRadius: "10px",
        border: "1px solid var(--border-color)",
      }}
    >
      <h1 style={{ color: "var(--accent-yellow)", marginBottom: "0.75rem" }}>
        {post.title}
      </h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        By {post.author} on {post.date}
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
        {post.content}
      </p>
      <Link to="/posts" className="btn btn-primary">
        ← Back to Posts
      </Link>
    </article>
  );
};
