import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser } from "../../js/utils/storage.js";

describe("GetUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    saveUser({ data: { name: "user_test" } });
    expect(getUsername()).toBe("user_test");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
