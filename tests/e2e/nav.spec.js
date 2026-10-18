import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("user can navigate to homepage and load the venues", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.locator('a[href*="venue"]').first()).toBeVisible();
  });

  test("user can click the first venue and load the venue details page with the right heading", async ({
    page,
  }) => {
    await page.goto("/");
    const firstVenue = page.locator('a[href*="venue"]').first();
    await expect(firstVenue).toBeVisible();

    await firstVenue.click();
    await expect(
      page.getByRole("heading", { name: "Venue details" }),
    ).toBeVisible();
  });
});
