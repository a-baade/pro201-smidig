

const { Builder, By, Key, until } = require('selenium-webdriver')
describe('frontPage-aboutUs', function() {
  require('chromedriver');
  const webdriver = require("selenium-webdriver");
  let driver = new webdriver.Builder()
    .forBrowser("chrome")
    .build();
  let vars
  beforeEach(async function() {
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('frontPage-aboutUs', async function() {
    // Test name: frontPage-aboutUs
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("http://localhost:3000/")
    // 2 | setWindowSize | 1323x797 | 
    await driver.manage().window().setRect({ width: 1323, height: 797 })
    // 3 | click | css=.about-us-btn | 
    await driver.findElement(By.css(".about-us-btn")).click()
    // 4 | click | css=.logo | 
    await driver.findElement(By.css(".logo")).click()
    // 5 | click | css=main > div | 
    await driver.findElement(By.css("main > div")).click()
  })
})
