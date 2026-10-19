import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import { PostsPage } from "./PostsPage";
import { initialPosts } from "../data/posts";

describe("PostsPage Component", () => {
  it("renders one article card per post in the data array", () => {
    render(
      <MemoryRouter>
        <PostsPage />
      </MemoryRouter>,
    );

    const postArticles = screen.getAllByRole("article");
    expect(postArticles).toHaveLength(initialPosts.length);
  });
});
