const puppeteer = require('puppeteer')

const prueba = async () => {
  console.log('Iniciando Scraping')
  // config basica
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')
  const url = 'https://localbitcoins.com/buy-bitcoins-online/ves/c/bank-transfers/?q=banesco'
  // ir a la pagina inicial
  await page.goto(url)
  // esperamos el despliegue de las publicaciones
  await page.waitForSelector('tr.clickable')
  // definimos publicaciones para iterar sobre ellas
  const posts = await page.$$('tr.clickable')
  // definimos cada publicacion individualmente debido a que no podemos utilizar
  // un for..of loop debido al cambio de contexto generado por la navegacion iterada

  for (let i = 0; i < posts.length; i++) {

    const post = posts[i]
    const button = await post.$('td.column-button > a')
    button.click()
    
    const amountinput = await page.querySelector(`#btcinput`)

        // const scrapedpost = {
        //   payment: await fullPost.querySelector(`body > div.container > div.adlisting > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div.col-md-8 > p`).textContent.trim(),
        //   price: await fullPost.querySelector(`#ad_price`).textContent.trim(),
        //   user: await fullPost.querySelector(`body > div.container > div.adlisting > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div.col-md-8 > a > span`).textContent.trim(),
        //   limits: await fullPost.querySelector(`body > div.container > div.adlisting > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div.col-md-8 > p`).textContent.trim(),
        //   cuanto: await fullPost.querySelector(`#amountinput`).textContent.trim()
        // }
        
        console.log(await amountinput.toString())
      page.goBack()
    }

  await browser.close()
  return scrapedpost

}

module.exports = prueba
