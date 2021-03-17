const Scraper = require("image-scraper");
const scraper = new Scraper("https://jscamp.tech/");

scraper.scrape((image) => image.save());
