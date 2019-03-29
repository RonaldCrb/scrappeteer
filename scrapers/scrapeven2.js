import puppeteer from 'puppeteer'
const urlBuy = 'https://localbitcoins.com/instant-bitcoins/?action=buy&country_code=VE&amount=50000000&currency=VES&place_country=VE&online_provider=ALL_ONLINE&find-offers=Search'
const urlSell = 'https://localbitcoins.com/instant-bitcoins/?action=sell&country_code=VE&amount=50000000&currency=VES&place_country=VE&online_provider=ALL_ONLINE&find-offers=Search'
const buySelector = 'body > div:nth-child(3) > table > tbody > tr'

const scrapeVenBuy = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(urlBuy)

  const scrapedData = await page.evaluate(() =>
    document.querySelectorAll(buySelector)
      .map(link => ({
        buyer: link.querySelector('.column-user').textContent,
        price: link.querySelector('.column-price').textContent,
        limit: link.querySelector('.column-limit').textContent,
      }))
  )

  await browser.close()
  return scrapedData
}

const scrapeVenSell = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(urlSell)

  const scrapedData = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.ytd-video-renderer #video-title'))
      .map(link => ({
        title: link.getAttribute('title'),
        link: link.getAttribute('href')
      }))
      .slice(0, 10)
  )


  await browser.close()
  return scrapedData
}

module.exports.scrapeVenBuy = scrapeVenBuy
module.exports.scrapeVenSell = scrapeVenSell
