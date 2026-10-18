import { useState } from "react";
import { Link } from "react-router";
import type { BlogPost } from "../data/posts";

interface PostCardProps {
  post: BlogPost;
}

export const PostCard = ({ post }: PostCardProps) => {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <article className="post-card" data-testid={`post-card-${post.id}`}>
      <div>
        <h3>{post.title}</h3>
        <p className="post-meta">
          By {post.author} • {post.date}
        </p>
        <p className="post-excerpt">{post.excerpt}</p>
      </div>

      <div className="card-actions">
        <Link to={`/posts/${post.id}`} className="btn btn-primary">
          Read Post
        </Link>
        <button
          type="button"
          onClick={handleLike}
          className={`btn btn-like ${isLiked ? "liked" : ""}`}
          aria-label={`Like ${post.title}`}
        >
          {isLiked ? "★ Liked" : "☆ Like"} ({likes})
        </button>
      </div>
    </article>
  );
};
