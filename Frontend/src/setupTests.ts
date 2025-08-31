// src/setupTests.ts
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Automatically clean up after each test to avoid memory leaks
afterEach(() => {
  cleanup();
});
