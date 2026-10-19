import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1
        style={{
          fontSize: "4rem",
          color: "var(--accent-yellow)",
          marginBottom: "0.5rem",
        }}
      >
        404
      </h1>
      <h2 style={{ marginBottom: "1rem" }}>Page Not Found</h2>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
        The requested URL was not found on this blog.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};
