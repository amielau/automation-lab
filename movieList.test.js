const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to addMovies.com
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})

const addMovie = async (driver) => {
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//input')).sendKeys('The Batman')

    await driver.findElement(By.xpath('//button[text()="Add"]')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    expect(movie.isDisplayed()).toBeTruthy()
}

test('add movie to the list', async () => {
    await addMovie(driver)

    await driver.sleep(2000)
})

test("cross off movie", async () => {
    await driver.findElement(By.xpath('//span')).click()

    await driver.sleep(2000)
})

test("uncross movie", async () => {
    await driver.findElement(By.xpath('//span')).click()


    await driver.sleep(2000)
})

test("delete movie", async () => {
    await driver.findElement(By.id('TheBatman')).click()

    await driver.sleep(2000)
})