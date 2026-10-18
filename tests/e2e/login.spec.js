// @ts-check
import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("a user can successfully log in with valid credentials from environment variables", async ({
    page,
  }) => {
    await page.goto("/login/");

    await page.getByPlaceholder("Email").fill(process.env.TEST_USER_EMAIL);
    await page
      .getByPlaceholder("Password")
      .fill(process.env.TEST_USER_PASSWORD);
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page).toHaveURL("/");
  });

  test("user sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login/");

    await page.getByPlaceholder("Email").fill("wrong.email@stud.noroff.no");
    await page.getByPlaceholder("Password").fill("wrongpassword");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByRole("alert")).toBeVisible();
    await expect(page).toHaveURL("/login/");
  });
});
