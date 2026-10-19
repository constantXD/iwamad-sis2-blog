import { useAuth } from "../context/AuthContext";

export const DashboardPage = () => {
  const { logout } = useAuth();

  return (
    <div
      style={{
        background: "var(--bg-surface)",
        padding: "2rem",
        borderRadius: "10px",
        border: "1px solid var(--border-color)",
      }}
    >
      <h1 style={{ color: "var(--accent-yellow)", marginBottom: "1rem" }}>
        Protected Dashboard
      </h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        Access granted! This area is only accessible to authenticated users.
      </p>
      <button type="button" onClick={logout} className="btn btn-primary">
        Sign Out
      </button>
    </div>
  );
};
