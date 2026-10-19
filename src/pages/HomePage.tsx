import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "3rem 0" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          color: "var(--accent-yellow)",
          marginBottom: "1rem",
        }}
      >
        Welcome to DEV.LOG
      </h1>
      <p
        style={{
          color: "var(--text-muted)",
          maxWidth: "600px",
          margin: "0 auto 2rem",
        }}
      >
        A modular blog application built with React, TypeScript, and React
        Router. Explore our latest technical insights below.
      </p>
      <Link
        to="/posts"
        className="btn btn-primary"
        style={{
          display: "inline-block",
          fontSize: "1rem",
          padding: "0.75rem 1.5rem",
        }}
      >
        Explore All Posts →
      </Link>
    </div>
  );
};
