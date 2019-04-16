const puppeteer = require('puppeteer')

const banesco = async () => {
  console.log('Iniciando Scraping')
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const url = 'https://localbitcoins.com/buy-bitcoins-online/ves/c/bank-transfers/?q=banesco'
  await page.goto(url);
  // id=amountinput
  const posts = await page.evaluate(() =>
    Array.from(document.querySelectorAll('tr.clickable'))
      .map(item => ({
        title: item.querySelector('td:nth-child(2)').innerText.trim(),
        trader: item.querySelector('.column-user').textContent.trim(),
        price: item.querySelector('.column-price').textContent.trim(),
        limit: item.querySelector('.column-limit').textContent.trim()
      }))
  )
  await browser.close()
  return posts;
}

module.exports = banesco

// este scraper devuelve un array de objetos simlares a este

// [
//  {
//    "title":"Transfers with specific bank: Banesco 196.000",
//    "trader":"osdumar (3000+; 99%)",
//    "price":"13,850,000.00 VES",
//    "limit":"196,000 - 1,000,000 VES"
//  }
// ]
