const { Builder, By, Key, until } = require('selenium-webdriver');

async function googleSearch() {
    // Initialize the WebDriver with the browser of your choice (Chrome in this case)
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // 1. Open the Google homepage
        await driver.get('https://www.google.com');

        // 2. Find the search box element by name and enter a query
        let searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('Selenium WebDriver', Key.RETURN);

        // 3. Wait until the results page loads and the results are displayed
        await driver.wait(until.elementLocated(By.css('h3')), 10000);

        // 4. Retrieve the titles of the search results
        let results = await driver.findElements(By.css('h3'));


        console.log('Search results for "Selenium WebDriver":');
        for (let result of results) {
            let title = await result.getText();
            console.log(title);
        }

        await driver.sleep(100000);
    } finally {
        // Close the browser after the test
        await driver.quit();
    }
}

// Run the function to execute the test
googleSearch();
