// src/test/hero.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "../pages/home/Hero";
import { MemoryRouter } from "react-router-dom";

describe("Hero component", () => {
  it("renders the heading", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /invest in everything/i })
    ).toBeInTheDocument();
  });

  it("renders the signup button", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("button", { name: /sign up for free/i })
    ).toBeInTheDocument();
  });
});
