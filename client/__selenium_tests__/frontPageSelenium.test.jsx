// Generated by Selenium IDE
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const webdriver = require("selenium-webdriver");

describe("frontPageSelenium", function () {
  require("chromedriver");
  const webdriver = require("selenium-webdriver");
  let driver = new webdriver.Builder().forBrowser("chrome").build();
  let vars;
  beforeEach(async function () {
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("frontPageSelenium", async function () {
    driver.get("http://localhost:3000/").then(function () {
      return driver.then(function () {
        return driver
          .findElement(By.linkText("About us"))
          .click()
          .then(function () {
            const element = driver.findElement(By.linkText("About us"));
            driver
              .actions({ bridge: true })
              .moveToElement(element)
              .perform()
              .then(function () {
                const element = driver.findElement(By.CSS_SELECTOR, "body");
                driver
                  .actions({ bridge: true })
                  .moveToElement(element, 0, 0)
                  .perform()
                  .then(function () {
                    driver
                      .findElement(By.css(".logo"))
                      .click()
                      .then(function () {
                        driver
                          .manage()
                          .window()
                          .setRect({ width: 1026, height: 796 });
                        driver.sleep(20000);
                      });
                  });
              });
          });
      });
    });
  });
});
