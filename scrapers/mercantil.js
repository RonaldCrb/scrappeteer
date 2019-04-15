const puppeteer = require('puppeteer')

const mercantil = async () => {
  console.log('Iniciando Scraping')
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const url = 'https://localbitcoins.com/buy-bitcoins-online/ves/c/bank-transfers/?q=mercantil'
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

module.exports = mercantil
// este scraper devuelve un array de objetos simlares a este

// [
//   {
//     "title":"Transfers with specific bank: Mercantil mercantil",
//     "trader":"Jacquii25 (1000+; 100%)",
//     "price":"13,713,225.64 VES",
//     "limit":"136,000 - 390,000 VES"
//   }
// ]
