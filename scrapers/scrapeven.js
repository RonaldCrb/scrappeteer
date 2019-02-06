const puppeteer = require('puppeteer')
const URL = 'https://localbitcoins.com/instant-bitcoins/?action=sell&country_code=VE&amount=50000000&currency=VES&place_country=VE&online_provider=ALL_ONLINE&find-offers=Search';
const paymentSelector = 'body > div:nth-child(3) > table > tbody > tr'

const scrapelbtcven = async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  const page = await browser.newPage()

  await page.goto(URL, {waitUntil: 'networkidle0'})
  await page.waitForSelector(paymentSelector)
  await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.2.1.min.js'})

  const result = await page.evaluate(() => {
        try {
            var data = [];
            $('td.loop__post-title').each(() => {
                const buyer = $(this).find('td').attr('.column-user');
                const payment = $(this).find('td');
                const price = $(this).find('td').attr('.column-price');
                const limit = $(this).find('td').attr('.column-limit');
                data.push({
                  'buyer': buyer,
                  'payment': payment,
                  'price': price,
                  'limit': limit
                });
            });
            return data; // Return our data array
        } catch(err) {
            reject(err.toString());
        }
    });

    // let's close the browser
    await browser.close();

    // ok, let's log blog titles...
    for(var i = 0; i < result.length; i++) {
        console.log('buyer: ' + result[i].buyer +
                    ' payment: ' + result[i].payment +
                    ' price: ' + result[i].price +
                    ' limit: ' + result[i].limit)
    }
    process.exit();
}).catch(function(error) {
    console.error('Error en el scraping!');
    process.exit();
});
