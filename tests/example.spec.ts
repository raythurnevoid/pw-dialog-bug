import { test, expect } from "@playwright/test";

test("dialog bug", async ({ page }) => {
	await page.goto("http://localhost:4173");
	await page.getByRole("button", { name: "Click me" }).click();
	await expect(page).toHaveScreenshot("dialog-bug.png", {
		mask: [page.getByText("Dialog content"), page.getByText("Click me")],
	});
});
