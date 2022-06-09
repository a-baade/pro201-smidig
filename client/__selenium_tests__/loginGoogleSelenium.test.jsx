const { Builder, By, Key, until } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");

describe("login-google", function () {
  require("chromedriver");
  const webdriver = require("selenium-webdriver");
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await new webdriver.Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("login-google", async function () {
    driver.get("http://localhost:3000/").then(function () {
      return driver
        .wait(until.elementLocated(By.css(".sign-in-btn")), 20000)
        .then(function () {
          return driver
            .findElement(By.linkText("Login"))
            .click()
            .then(function () {
              driver
                .findElement(By.css(".google-login-btn"))
                .click()
                .then(function () {
                  driver
                    .manage()
                    .window()
                    .setRect({ width: 1323, height: 797 });
                  driver.sleep(20000);
                });
            });
        });
    });
  });
});
