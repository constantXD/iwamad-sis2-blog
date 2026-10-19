import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export const SignInPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "3rem auto",
        textAlign: "center",
        background: "var(--bg-surface)",
        padding: "2.5rem",
        borderRadius: "10px",
        border: "1px solid var(--border-color)",
      }}
    >
      <h2 style={{ color: "var(--accent-yellow)", marginBottom: "1rem" }}>
        Sign In Required
      </h2>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
        You must be signed in to view the protected dashboard.
      </p>
      <button
        type="button"
        onClick={handleSignIn}
        className="btn btn-primary"
        style={{ width: "100%" }}
      >
        Sign In
      </button>
    </div>
  );
};
