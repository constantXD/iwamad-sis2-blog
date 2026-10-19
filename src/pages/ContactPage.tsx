export const ContactPage = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        background: "var(--bg-surface)",
        padding: "2rem",
        borderRadius: "10px",
        border: "1px solid var(--border-color)",
      }}
    >
      <h1 style={{ color: "var(--accent-yellow)", marginBottom: "1rem" }}>
        Contact
      </h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        For feedback or article submissions, please reach out directly:
      </p>
      <p style={{ color: "var(--accent-yellow)", fontWeight: 600 }}>
        Email: contact@devlog.local
      </p>
    </div>
  );
};
