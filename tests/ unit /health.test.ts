import { describe, expect, it } from "vitest";

import app from "@/app";

describe("GET /health", () => {
  it("should return API health status", async () => {
    const response = await app.request("/health");

    expect(response.status).toBe(200);

    const body = await response.json();

    expect(body).toEqual({
      status: "ok",
    });
  });
});
