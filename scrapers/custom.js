import puppeteer from 'puppeteer'

export const custom = async (url) => {
  console.log('Iniciando Scraping')
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  // id=amountinput
  const posts = await page.evaluate(() =>
    Array.from(document.querySelectorAll('tr.clickable'))
      .map(item => ({
        title: item.querySelector('td:nth-child(2)').innerText.trim(),
        trader: link.querySelector('.column-user').textContent,
        price: link.querySelector('.column-price').textContent,
        limit: link.querySelector('.column-limit').textContent
      }))
  )
  await browser.close()
  return posts;
}
