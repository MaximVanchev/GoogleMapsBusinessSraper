import puppeteer from 'puppeteer';

class Buissness
{

  constructor(name , adress , phoneNumber , link)
  {
    this.name = name;
    this.adress = adress;
    this.phoneNumber = phoneNumber;
    this.link = link;
  }

  toString()
  {
    return String.Format("Name: {0} | {1} | {2} | Link: {3}" , this.name , this.adress , this.phoneNumber , this.link);
  }
}

const restaurantURL = 'https://www.google.com/maps/search/Restaurants/@42.436948,24.7869961,8z/data=!4m9!2m8!3m6!1sRestaurants!2sBulgaria!3s0x40a8fec1c85bf089:0xa01269bf4c10!4m2!1d25.48583!2d42.733883!6e5?authuser=0&hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D';
const acceptButtonClass = '.lssxud';
const resultsSelector = '[role="feed"]';
const bottomEndClass = '.PbZDve';
const businessLinkClass = '.hfpxzc';
const businessWebLinkSelector = 'a[data-item-id="authority"]';
const businessNameClass = 'h1.DUwDvf.lfPIob';
const businessAdressSelector = 'button[data-item-id="address"] span';
const businessPhoneSelector = 'button[data-tooltip="Copy phone number"] span';

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        //userDataDir: "./tmp", // capcha
    });

    // DoesItHasWebSite(business)
    // {
    //     if(business.)
    // } 

    const page = await browser.newPage();

    await page.goto(restaurantURL);

    await page.setViewport({width: 1080, height: 1024});

    await page.click(acceptButtonClass);

    await page.waitForNavigation();

    const resultsSelector = '.m6QErb.DxyBCb.kA9KIf.dS8AEf.ecceSd';
    await page.waitForSelector(resultsSelector, { timeout: 10000 });

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const scrollableContainer = await page.$(resultsSelector);

    // const containerHTML = await scrollableContainer.evaluate((container) => container.innerHTML);
    // console.log("Container Inner HTML:", containerHTML);
    

  if (!scrollableContainer) {
    console.error("Scrollable container not found. Exiting.");
    await browser.close();
    return;
  }

  console.log("Scrollable container found. Starting scrolling process...");

  // Scrolling configuration
  const scrollInterval = 1000; // Time between scrolls in milliseconds
  const maxScrollAttempts = 500; // Maximum number of scroll attempts
  let scrollAttempts = 0;
  let bottomEndMessageAppear = false;

  while (bottomEndMessageAppear == false) {
    console.log(`Scroll attempt: ${scrollAttempts + 1}`);

    // Scroll the container using the handle
    await scrollableContainer.evaluate((container) => {
      container.scrollBy(0, container.scrollHeight);
    });

    // Wait for the content to load
    await delay(scrollInterval);

    bottomEndMessageAppear = await page.$(bottomEndClass) == null ? false : true;

    if(bottomEndMessageAppear)
    {
      console.log("The bottom message appeared!");
    }
    
    scrollAttempts++; // Increment the scroll attempts
  }

    await browser.close();
})();