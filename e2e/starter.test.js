describe("e2e tests", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have logo", async () => {
    await expect(element(by.id("logo"))).toBeVisible();
  });

  it("should have searchbar", async () => {
    await expect(element(by.id("searchbar"))).toBeVisible();
  });

  it("should have button navigate to other screen", async () => {
    await element(by.id("searchbar")).typeText("Plovdiv");
    await element(by.id("search_button")).tap();
    await expect(element(by.testID("temp"))).toBeVisible();
  });

  it("should show navigate screen after tap", async () => {
    await element(by.id("navigate_button")).tap();
    await expect(element(by.id("route_screen"))).toBeVisible();
  });

  it("should show home screen after tap", async () => {
    await element(by.id("home_button")).tap();
    await expect(element(by.id("home_screen"))).toBeVisible();
  });
});
