import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";

describe("Route Protection Flow", () => {
  it("redirects unauthenticated users from /dashboard to /signin", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText(/Sign In Required/i)).toBeInTheDocument();
    // Ищем именно заголовок h1 страницы Dashboard, а не любой текст:
    expect(
      screen.queryByRole("heading", { name: /Protected Dashboard/i }),
    ).not.toBeInTheDocument();
  });
});
