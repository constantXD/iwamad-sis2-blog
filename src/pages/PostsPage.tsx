import { initialPosts } from "../data/posts";
import { PostCard } from "../components/PostCard";

export const PostsPage = () => {
  return (
    <div>
      <h1 style={{ color: "var(--accent-yellow)", marginBottom: "0.5rem" }}>
        Articles
      </h1>
      <p style={{ color: "var(--text-muted)" }}>
        Latest technical articles and guides.
      </p>
      <div className="posts-grid">
        {initialPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
