const puppeteer = require('puppeteer')

export const lbtcvenves = async () => {
  console.log('Iniciando Scraping')
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = "https://localbitcoins.com/buy-bitcoins-online/ves/";
  await page.goto(url);
  //
  // await page.screenshot({path: 'example.png'});
  const posts = await page.evaluate(() =>
    Array.from(document.querySelectorAll('tr.clickable'))
      .map(item => ({
        trader:  item.querySelector('td.column-user').innerText,
        payment: item.querySelector('td:nth-child(2)').innerText.trim(),
        price: item.querySelector('td.column-price').innerText
      }))
  )
  return posts;
  await browser.close()
};
